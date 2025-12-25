import React from 'react'
import { Card, CardBody } from 'react-bootstrap';

const UserCard = ({ name, email, role, color, avatar }) => (
    <Card className="border-0 rounded-4 p-2">
        <div className='d-flex align-items-center'>
            <img
                src={avatar}
                alt={name}
                className={`rounded-circle mb-2 border border-2 border-${color}`}
                width={60}
                height={60}
            />
            <CardBody className='text-start'>
                <strong>{name}</strong>
                <div className="text-muted small">{email}</div>
                <span className={`text-${color} fw-semibold`}>{role}</span>
            </CardBody>
        </div>
    </Card>
);


export default UserCard
