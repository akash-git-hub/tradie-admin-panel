import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MailIcon from '../../Icon/MailIcon';
import ShieldIcon from '../../Icon/ShieldIcon';
import EyeIcon from '../../Icon/EyeIcon';
import EyeSlashIcon from '../../Icon/EyeSlashIcon';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <Container fluid className="login-wrapper">
                <Row className="justify-content-center align-items-center min-vh-100">
                    <Col xs={11} sm={8} md={6} lg={4} xl={3} className="text-center">
                        <img
                            src="/assets/Images/Tradie_Logo.png"
                            alt="Tradie Logo"
                            className="login-logo mb-3"
                        />
                        <h2 className="login-title mb-4">LOGIN</h2>
                        <Form>
                            <Form.Group className="mb-3 text-start">
                                <Form.Label>Email Address / Mobile Number</Form.Label>
                                <div className="input-icon">
                                    <MailIcon />
                                    <Form.Control
                                        type="text"
                                        placeholder="TradieAdmin@gmail.com"
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3 text-start">
                                <Form.Label>Password</Form.Label>
                                <div className="input-icon">
                                    <ShieldIcon />
                                    <Form.Control
                                        type={showPassword ? "text" : "password"}
                                        placeholder="********"
                                    />
                                    <span
                                        className="eye-icon"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                                    </span>
                                </div>
                            </Form.Group>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember me"
                                    className="remember-check"
                                    style={{ accentColor: "#d9b04c" }}
                                />
                                <span className="forgot-link">Forgot password?</span>
                            </div>
                            <Button className="login-btn w-100" type="submit">
                                Log In
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
