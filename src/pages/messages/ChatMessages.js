import { Row, Col, Card, Image, Form, Button, Badge } from "react-bootstrap";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import ImageIcon from "../../Icon/ImageIcon";
import MicrophoneIcon from "../../Icon/MicrophoneIcon";
import AttachmentIcon from "../../Icon/AttactmentIcon";

const ChatMessages = () => {
    const users = [
        { name: "David Elson", avatar: "https://i.pravatar.cc/40?img=1" },
        { name: "Corina McCoy", avatar: "https://i.pravatar.cc/40?img=2" },
        { name: "Dennis Callis", avatar: "https://i.pravatar.cc/40?img=3" },
        { name: "Kimberly Mast", avatar: "https://i.pravatar.cc/40?img=4" }
    ];

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
                            <Col lg={4} xl={3} className="h-100">
                                <Card className="h-100 border-1 shadow-sm rounded-4">
                                    <Card.Body className="MessageChatBody p-2 overflow-auto">
                                        {users.map((user, i) => (
                                            <div
                                                key={i}
                                                className={`d-flex align-items-center p-3 rounded-3 mb-2 user-item ${i === 0 ? "active" : ""
                                                    }`}
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
                                        ))}
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={8} xl={9} className="h-100">
                                <Card className="h-100 d-flex flex-column border-1 shadow-sm rounded-4">
                                    <Card.Header className="bg-white border-0 d-flex align-items-center gap-3 rounded-top-4 border-bottom">
                                        <Button variant="light" size="sm">‹</Button>
                                        <h4 className="mb-0 fw-bold">David Elson</h4>
                                        <Badge bg="light" text="primary">Contractor</Badge>
                                    </Card.Header>
                                    <Card.Body className="chat-body">
                                        <div className="message-wrapper received">
                                            <div className="message received">
                                                <p className="mb-0">
                                                    The point of using Lorem Ipsum is that it has a normal
                                                    distribution of letters.
                                                </p>
                                            </div>
                                            <small className="time">6:38 pm</small>
                                        </div>

                                        <div className="message-wrapper sent">
                                            <div className="message sent">
                                                <p className="mb-0">
                                                    There are many variations of passages of Lorem Ipsum available.
                                                </p>
                                            </div>
                                            <small className="time">6:34 pm</small>
                                        </div>

                                        <div className="message-wrapper received">
                                            <div className="message received">
                                                <p className="mb-0">
                                                    The point of using Lorem Ipsum is that it has a normal
                                                    distribution of letters.
                                                </p>
                                            </div>
                                            <small className="time">6:38 pm</small>
                                        </div>

                                    </Card.Body>
                                    <Card.Footer className="bg-white border-0 rounded-5">
                                        <div className="chat-input-wrapper d-flex align-items-center gap-2 px-3 py-2">
                                            <Form.Control
                                                placeholder="Write message"
                                                className="chat-input border-0 shadow-none bg-none"
                                            />
                                            <Button variant="link" className="p-0 text-muted">
                                                <AttachmentIcon />
                                            </Button>
                                            <Button variant="link" className="p-0 text-muted">
                                                <ImageIcon />
                                            </Button>
                                            <Button variant="link" className="p-0 text-muted">
                                                <MicrophoneIcon />
                                            </Button>
                                            <Button variant="warning" className="rounded-pill px-4">
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
        </div>
    );
};

export default ChatMessages;
