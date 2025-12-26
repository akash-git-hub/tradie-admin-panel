import React from "react";
import { Card, CardBody } from "react-bootstrap";

const UserCard = ({
    name,
    email,
    role,
    color = "secondary",
    avatar,
    showWaitingAssign = false
}) => {
    return (<>
        {showWaitingAssign ?
            <>
                <Card className="border-0 rounded-4 p-4 text-center">
                    <CardBody className="d-flex flex-column align-items-center justify-content-center">
                        <strong className={`text-${color} fw-semibold`}>Waiting for assign</strong>
                    </CardBody>
                </Card>
            </>
            :
            <>
                <Card className="border-0 rounded-4 p-3">
                    <div className="d-flex align-items-center gap-3">
                        <img
                            src={avatar}
                            alt={name}
                            className={`rounded-circle mb-2 border border-2 border-${color}`}
                            width={60}
                            height={60}
                        />
                        <CardBody className="text-start p-0">
                            <strong>{name}</strong>
                            <div className="text-muted small">{email}</div>
                            <span className={`text-${color} fw-semibold`}>{role}</span>
                        </CardBody>
                    </div>
                </Card>

            </>
        }

    </>)
};

export default UserCard;
