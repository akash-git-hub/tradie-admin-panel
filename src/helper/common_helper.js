export const STATUS_BADGE_MAP = {
    posted: {
        text: "Posted",
        className: "text-primary border-primary",
    },
    assigned: {
        text: "Assigned",
        className: "text-info border-info",
    },
    in_progress: {
        text: "In Progress",
        className: "text-warning border-warning",
    },
    completed: {
        text: "Completed",
        className: "text-success border-success",
    },
    cancelled: {
        text: "Cancelled",
        className: "text-danger border-danger",
    },
    expired: {
        text: "Expired",
        className: "text-secondary border-secondary",
    },
};



export const PROJECT_STATUS_OPTIONS = [
    "All",
    "Posted",
    "Assigned",
    "InProgress",
    "Completed"
];

export const PROJECT_STATUS_POSTED = "posted";


export const projectMileStoneStatus = Object.freeze({
    CONST_PROJECT_MILE_STONE_STATUS_REVIEW: "review",
    CONST_PROJECT_MILE_STONE_STATUS_ACCEPTED: "accepted",
    CONST_PROJECT_MILE_STONE_STATUS_REJECTED: "rejected",
    CONST_PROJECT_MILE_STONE_STATUS_INPROGRESS: "inprogress",
    CONST_PROJECT_MILE_STONE_STATUS_COMPLETED: "completed",
    CONST_PROJECT_MILE_STONE_STATUS_EXPIRED: "expired"
})


export const projectMileStoneStatusConfig = {
    accepted: {
        color: "#FF4D4F",
        dot: "#F36C5A",
        line: "#D1D1D1",
        amount: "#F36C5A",
        label: "Accepted",
    },
    inprogress: {
        color: "#E2AC2E",
        dot: "#E2AC2E",
        line: "#D1D1D1",
        amount: "#E2AC2E",
        label: "In Progress",
    },
    completed: {
        color: "#4CD964",
        dot: "#4CD964",
        line: "#D1D1D1",
        amount: "#4CD964",
        label: "Completed",
    },
};


export const getConversationId = (user1, user2) => {
    return [user1, user2].sort((a, b) => a - b).join("_");
};
