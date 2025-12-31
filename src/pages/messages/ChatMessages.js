import {
    Row,
    Col,
    Card,
    Image,
    Form,
    Button,
    Badge,
    InputGroup,
    Modal,
    Spinner,
} from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import ImageIcon from "../../Icon/ImageIcon";
import AttachmentIcon from "../../Icon/AttactmentIcon";
import AddUserIcon from "../../Icon/AddUserIcon";
import {
    getConversationId,
    ensureConversation,
    sendMessage,
    subscribeMessages,
    addMemberToUser,
    doesConversationExist,
    promoteMemberToTop,
} from "../../services/ChatService";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";

import { fetchChatMembersProfileAPI, fetchUsersForChatAPI, uploadChatMediaAPI } from "../../services/NetworkCall";
import { useLocation } from "react-router-dom";

const CURRENT_USER_ID = +process.env.REACT_APP_ADMIN_ID;

const ChatMessages = () => {
    const location = useLocation();
    const userId = location.state?.userId;
    const [users, setUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [error, setError] = useState(null);
    const [activeConvId, setActiveConvId] = useState(null);
    const [activeUser, setActiveUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const [showAddUser, setShowAddUser] = useState(false);
    const [backendSearch, setBackendSearch] = useState("");
    const [allUserList, setAllUserList] = useState([]);
    const [modelLoading, setModelLoading] = useState(false);
    const [isNewConversation, setIsNewConversation] = useState(false);
    const [chatUserSearch, setChatUserSearch] = useState("");
    const fileInputRef = useRef(null);
    const imageInputRef = useRef(null);
    const [previewFile, setPreviewFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [previewType, setPreviewType] = useState("");
    const [showPreview, setShowPreview] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [imageLoadingMap, setImageLoadingMap] = useState({});


    const handleImageLoad = (msgId) => {
        setImageLoadingMap(prev => ({
            ...prev,
            [msgId]: false,
        }));
    };

    const handleImageStart = (msgId) => {
        setImageLoadingMap(prev => ({
            ...prev,
            [msgId]: true,
        }));
    };


    useEffect(() => {
        if (!userId || allUserList.length === 0) return;

        const userToOpen = allUserList.find(u => u.id === userId);
        if (userToOpen) {
            openChat(userToOpen);
        }
    }, [userId, allUserList]);


    const unsubMsgRef = useRef(null);
    const db = getFirestore();


    const fetchMembersProfile = async (members) => {
        const payload = { members }
        const res = await fetchChatMembersProfileAPI(payload);
        if (res.success) {
            return res.data;
        } else {
            return []
        }
    }

    // 🔹 Fetch members for the current user
    useEffect(() => {
        setLoadingUsers(true);

        const userRef = doc(db, "users", CURRENT_USER_ID.toString());

        const unsubscribe = onSnapshot(
            userRef,
            async (snap) => {
                if (!snap.exists()) {
                    setUsers([]);
                    setLoadingUsers(false);
                    return;
                }

                const members = snap.data()?.members || [];

                if (members.length === 0) {
                    setUsers([]);
                    setLoadingUsers(false);
                    return;
                }

                try {
                    const usersFromServer = await fetchMembersProfile(members);

                    const mappedUsers = usersFromServer.map(u => ({
                        id: u.id,
                        name: u.user_name,
                        avatar: u.user_profile,
                        email: u.user_email,
                        roleId: u.role_id,
                        roleName: u.role_name,
                    }));

                    setUsers(mappedUsers);
                } catch (err) {
                    console.error("Sidebar realtime error:", err);
                    setError("Failed to load chat users");
                } finally {
                    setLoadingUsers(false);
                }
            },
            (err) => {
                console.error("Firestore sidebar subscribe error:", err);
                setError("Realtime connection failed");
                setLoadingUsers(false);
            }
        );

        return () => unsubscribe();
    }, []);



    // 🔹 Subscribe messages for active conversation
    useEffect(() => {
        if (!activeConvId) return;

        unsubMsgRef.current?.();
        unsubMsgRef.current = subscribeMessages(activeConvId, setMessages);

        return () => unsubMsgRef.current?.();
    }, [activeConvId]);

    const openChat = async (user) => {

        const convId = getConversationId(CURRENT_USER_ID, user.id);
        setActiveUser(user);
        setActiveConvId(convId);
        setShowAddUser(false);
        setMessages([])

        const exists = await doesConversationExist(convId);

        if (!exists) {
            // Conversation does not exist yet
            setIsNewConversation(true);
        } else {
            setIsNewConversation(false);
        }

        // Ensure conversation only for UI + subscription
        await ensureConversation(convId, [CURRENT_USER_ID, user.id]);
    };


    const handleSend = async () => {
        if (!text.trim() || !activeConvId || !activeUser) return;

        // 🔥 FIRST MESSAGE LOGIC
        if (isNewConversation) {
            await addMemberToUser(CURRENT_USER_ID, activeUser.id);
            await addMemberToUser(activeUser.id, CURRENT_USER_ID);
            setIsNewConversation(false);
        }

        setText("");

        await sendMessage({
            conversationId: activeConvId,
            senderId: CURRENT_USER_ID,
            message: text.trim(),
        });

        // 🔥 ALWAYS promote to top
        await promoteMemberToTop(CURRENT_USER_ID, activeUser.id);
    };

    const fetchUserListForChat = async (search = backendSearch) => {
        setModelLoading(true);
        const res = await fetchUsersForChatAPI({ search });
        if (res.success) {
            const mData = res?.data.map((u) => {
                return {
                    id: u?.id,
                    name: u?.name,
                    avatar: u?.profile_url,
                    email: u?.email,
                    roleId: u?.role_id,
                    roleName: u?.role_name,
                }
            })
            setAllUserList(mData || []);
        }
        setModelLoading(false);
    }

    useEffect(() => { fetchUserListForChat(backendSearch) }, [backendSearch]);

    const handleBackendSearchUser = (e) => {
        const value = e.target.value;
        setBackendSearch(value)
    }

    const handleCloseModal = () => {
        setBackendSearch("");
        setAllUserList([]);
        setShowAddUser(false);
    };

    const filteredUsers = users.filter((user) =>
        user.name?.toLowerCase().includes(chatUserSearch.toLowerCase())
    );

    const handleChatUserSearch = (e) => {
        setChatUserSearch(e.target.value.trimStart());
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setPreviewFile(file);
        setPreviewType(file.type);

        if (file.type.startsWith("image/")) {
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setPreviewUrl(""); // pdf
        }

        setShowPreview(true);
        e.target.value = "";
    };

    const handleSendFile = async () => {
        if (!previewFile || !activeConvId || !activeUser) return;

        setUploading(true); // 🔥 start loader

        // first message logic
        if (isNewConversation) {
            await addMemberToUser(CURRENT_USER_ID, activeUser.id);
            await addMemberToUser(activeUser.id, CURRENT_USER_ID);
            setIsNewConversation(false);
        }

        const formData = new FormData();
        formData.append("media", previewFile);

        try {
            const res = await uploadChatMediaAPI(formData);

            if (res.success) {
                await sendMessage({
                    conversationId: activeConvId,
                    senderId: CURRENT_USER_ID,
                    message: "",
                    file: res?.data[0]?.url,
                    fileType: previewFile.type, // image/jpeg, application/pdf
                });

                await promoteMemberToTop(CURRENT_USER_ID, activeUser.id);
            }
        } catch (err) {
            console.error("Upload failed", err);
        } finally {
            setUploading(false); // 🔥 stop loader
            setShowPreview(false);
            setPreviewFile(null);
            setPreviewUrl("");
            setPreviewType("");
        }
    };



    return (
        <div className="d-flex min-vh-100">
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>

            <div className="flex-grow-1 d-flex flex-column overflow-hidden">
                <Header />

                <div className="flex-grow-1 p-4 d-flex flex-column overflow-hidden">
                    <h3 className="fw-bold mb-3 text-start">Messages</h3>

                    <div className="chat-wrapper flex-grow-1">
                        <Row className="g-3 h-100">
                            {/* LEFT PANEL */}
                            <Col lg={4} xl={3} className="">
                                <Card className="h-100 border-1 shadow-sm rounded-4">
                                    <Card.Body className="MessageChatBody p-2 ">
                                        <div className="d-flex justify-content-center mb-3 gap-2">
                                            <InputGroup>
                                                <Form.Control
                                                    placeholder="Search Contact"
                                                    className="border-1 rounded-pill px-4 search_class"
                                                    value={chatUserSearch}
                                                    onChange={handleChatUserSearch}
                                                />
                                            </InputGroup>
                                            <Button
                                                className="rounded-5"
                                                onClick={() => setShowAddUser(true)}
                                            >
                                                <AddUserIcon />
                                            </Button>
                                        </div>

                                        {loadingUsers && (
                                            <div className="text-center py-3">
                                                <Spinner animation="border" size="sm" />
                                            </div>
                                        )}

                                        {error && <p className="text-danger">{error}</p>}
                                        <div className="userchat">
                                            {!loadingUsers &&
                                                filteredUsers.map((user) => (
                                                    <div
                                                        key={user.id}
                                                        onClick={() => openChat(user)}
                                                        className={`d-flex align-items-center p-3 rounded-3 mb-2 user-item ${activeUser?.id === user.id ? "active" : ""
                                                            }`}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        <Image
                                                            src={user.avatar}
                                                            roundedCircle
                                                            width={40}
                                                            height={40}
                                                        />
                                                        <span className="ms-3 fw-medium">{user.name}</span>
                                                        <span className="ms-auto">›</span>
                                                    </div>
                                                ))
                                            }
                                        </div>

                                        {!loadingUsers && filteredUsers.length === 0 && (
                                            <div className="text-center text-muted py-3">
                                                No Record Found
                                            </div>
                                        )}

                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* CHAT PANEL */}
                            <Col lg={8} xl={9} className="">
                                <Card className="d-flex flex-column border-1 shadow-sm rounded-4">
                                    <Card.Header className="bg-white border-0 d-flex align-items-center gap-3 border-bottom py-4" style={{
                                        borderRadius: '30px 30px 0px 0px'
                                    }}>
                                        <h4 className="mb-0 fw-bold">
                                            {activeUser?.name || "Select a chat"}
                                        </h4>
                                        {activeUser && (
                                            <Badge bg="light" text="primary">
                                                {activeUser?.roleName}
                                            </Badge>
                                        )}
                                    </Card.Header>

                                    <Card.Body className="chat-body flex-grow-1 overflow-auto">
                                        {activeUser ? (
                                            messages.length > 0 ? (
                                                messages.map((m) => (
                                                    <div
                                                        key={m.id}
                                                        className={`message-wrapper ${m.sender_id === CURRENT_USER_ID ? "sent" : "received"
                                                            }`}
                                                    >
                                                        <div
                                                            className={`message ${m.sender_id === CURRENT_USER_ID ? "sent" : "received"
                                                                }`}
                                                        >
                                                            {m.message && <p className="mb-1">{m.message}</p>}

                                                            {/* IMAGE */}
                                                            {m.file && m.file_type?.startsWith("image/") && (
                                                                <div style={{ maxWidth: "220px", position: "relative" }}>
                                                                    <Image
                                                                        src={m.file}
                                                                        fluid
                                                                        rounded
                                                                        onClick={() => window.open(m.file, "_blank")}
                                                                        style={{ cursor: "pointer" }}
                                                                    />
                                                                </div>
                                                            )}

                                                            {/* PDF */}
                                                            {m.file && m.file_type === "application/pdf" && (
                                                                <div
                                                                    className="d-flex align-items-center gap-2 p-2 rounded bg-light"
                                                                    style={{ cursor: "pointer", maxWidth: "240px" }}
                                                                    onClick={() => window.open(m.file, "_blank")}
                                                                >
                                                                    <span style={{ fontSize: "22px" }}>📄</span>
                                                                    <div>
                                                                        <div className="fw-medium">Document</div>
                                                                        <small className="text-muted">Tap to open</small>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <small className="time">
                                                            {m.send_time?.toDate().toLocaleTimeString()}
                                                        </small>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="h-100 d-flex align-items-center justify-content-center text-muted" >
                                                    No messages yet
                                                </div>
                                            )
                                        ) : (
                                            // 👇 WHEN NO CHAT SELECTED
                                            <div className="d-flex align-items-center justify-content-center" style={{
                                                height: 'calc(100vh - 260px)'
                                            }}>
                                                <h5 className="text-muted">Select your chat</h5>
                                            </div>
                                        )}
                                    </Card.Body>


                                    <Card.Footer className="bg-white border-1" style={{
                                        borderRadius: '0px 0px 30px 30px '
                                    }}>
                                        <div className="chat-input-wrapper d-flex align-items-center gap-2">
                                            <Form.Control
                                                value={text}
                                                onChange={(e) => setText(e.target.value)}
                                                placeholder="Write message"
                                                className="chat-input border-0 shadow-none"
                                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                            />
                                            <input
                                                type="file"
                                                accept="application/pdf"
                                                hidden
                                                ref={fileInputRef}
                                                onChange={handleFileSelect}
                                            />

                                            <Button
                                                variant="link"
                                                className="p-0 text-muted"
                                                onClick={() => fileInputRef.current.click()}
                                            >
                                                <AttachmentIcon />
                                            </Button>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                hidden
                                                ref={imageInputRef}
                                                onChange={handleFileSelect}
                                            />

                                            <Button
                                                variant="link"
                                                className="p-0 text-muted"
                                                onClick={() => imageInputRef.current.click()}
                                            >
                                                <ImageIcon />
                                            </Button>
                                            <Button
                                                variant="primary"
                                                className="rounded-2 px-4 text-white"
                                                onClick={handleSend}
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            {/* ADD USER MODAL */}
            <Modal
                show={showAddUser}
                onHide={handleCloseModal}
                centered
                size="sm"
            // backdrop="static"
            >
                <Modal.Body className="p-4 rounded-4">
                    <InputGroup className="mb-3">
                        <Form.Control
                            value={backendSearch}
                            onChange={handleBackendSearchUser}
                            placeholder="Search Contact"
                            className="border-0 shadow-sm rounded-pill"
                        />
                    </InputGroup>
                    <div className="userchat" style={{
                            height: '400px'
                    }}>

                        {modelLoading && (
                            <div className="text-center py-3">
                                <Spinner animation="border" size="sm" />
                            </div>
                        )}

                        {error && <p className="text-danger">{error}</p>}

                        {!modelLoading && (
                            allUserList.length === 0 ? (
                                <div className="text-center text-muted py-3">
                                    User not found
                                </div>
                            ) : (
                                allUserList.map((user) => (
                                    <div
                                        key={user.id}
                                        onClick={() => openChat(user)}
                                        className="d-flex align-items-center gap-3 py-2 px-2 rounded-3"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Image
                                            src={user?.avatar || "/default-avatar.png"}
                                            roundedCircle
                                            width={36}
                                            height={36}
                                        />
                                        <span className="fw-medium">{user.name}</span>
                                    </div>
                                ))
                            )
                        )}
                    </div>
                </Modal.Body>
            </Modal>


            {/* Upload image and video model */}
            <Modal
                show={showPreview}
                onHide={() => setShowPreview(false)}
                centered
                backdrop="static"
            >
                <Modal.Body className="p-3 text-center">

                    {/* IMAGE PREVIEW */}
                    {previewType.startsWith("image/") && (
                        <Image
                            src={previewUrl}
                            fluid
                            rounded
                            style={{ maxHeight: "300px" }}
                        />
                    )}

                    {/* PDF PREVIEW */}
                    {previewType === "application/pdf" && (
                        <div className="py-4">
                            <h5>📄 {previewFile?.name}</h5>
                            <small className="text-muted">
                                {(previewFile.size / 1024).toFixed(1)} KB
                            </small>
                        </div>
                    )}

                    <div className="d-flex justify-content-end mt-3 gap-2 align-items-center">
                        {uploading && (
                            <div className="me-auto d-flex align-items-center gap-2 text-muted">
                                <Spinner animation="border" size="sm" />
                                <span>Uploading...</span>
                            </div>
                        )}

                        <Button
                            variant="secondary"
                            disabled={uploading}
                            onClick={() => setShowPreview(false)}
                        >
                            Cancel
                        </Button>

                        <Button
                            variant="primary"
                            disabled={uploading}
                            onClick={handleSendFile}
                            className="text-white"
                        >
                            {uploading ? "Sending..." : "Send"}
                        </Button>
                    </div>


                </Modal.Body>
            </Modal>

        </div>
    );
};

export default ChatMessages;
