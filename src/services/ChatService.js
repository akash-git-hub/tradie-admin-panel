import {
    collection,
    doc,
    getDoc,
    setDoc,
    addDoc,
    updateDoc,
    query,
    where,
    orderBy,
    onSnapshot,
    serverTimestamp,
    arrayUnion
} from "firebase/firestore";
import { db } from "./firebase";

/** Always same conversation id */
export const getConversationId = (u1, u2) =>
    [u1, u2].sort((a, b) => a - b).join("_");

/** Ensure conversation exists */
export const ensureConversation = async (conversationId, members) => {
    const ref = doc(db, "conversation", conversationId);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
        await setDoc(ref, {
            lastMessage: "",
            lastTime: serverTimestamp(),
            updatedAt: serverTimestamp(),
        });
    }
};

/** Send message */
export const sendMessage = async ({
    conversationId,
    senderId,
    message = "",
    file = "",
    fileType = ""
}) => {
    const msgRef = collection(
        db,
        "conversation",
        conversationId,
        "messages"
    );

    await addDoc(msgRef, {
        message,
        sender_id: senderId,
        send_time: serverTimestamp(),
        file,
        file_type: fileType,
    });

    await updateDoc(doc(db, "conversation", conversationId), {
        lastMessage: message,
        lastTime: serverTimestamp(),
        updatedAt: serverTimestamp(),
    });
};

/** Subscribe to messages */
export const subscribeMessages = (conversationId, cb) => {
    const q = query(
        collection(db, "conversation", conversationId, "messages"),
        orderBy("send_time", "asc")
    );

    return onSnapshot(q, snap => {
        cb(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
};

/** Subscribe conversations */
export const subscribeConversations = (userId, cb) => {
    const q = query(
        collection(db, "conversation"),
        where("members", "array-contains", userId),
        orderBy("updatedAt", "desc")
    );

    return onSnapshot(q, snap => {
        cb(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
};


export const fetchUserDoc = async (userId) => {
    const userDoc = await getDoc(doc(db, "users", userId.toString()));
    if (userDoc.exists()) {
        return userDoc.data();
    }
};


/** Check if conversation exists */
export const doesConversationExist = async (conversationId) => {
    const ref = doc(db, "conversation", conversationId);
    const snap = await getDoc(ref);
    return snap.exists();
};

/** Add member to user's members array */
export const addMemberToUser = async (userId, memberId) => {
    const ref = doc(db, "users", userId.toString());
    await updateDoc(ref, {
        members: arrayUnion(memberId)
    });
};

export const promoteMemberToTop = async (userId, memberId) => {
    const userRef = doc(db, "users", userId.toString());
    const snap = await getDoc(userRef);

    if (!snap.exists()) return;

    const members = snap.data()?.members || [];

    // Remove if already exists
    const filtered = members.filter(id => id !== memberId);

    // Add to top
    const updatedMembers = [memberId, ...filtered];

    await updateDoc(userRef, {
        members: updatedMembers,
    });
};
