import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import MailIcon from '../Icon/MailIcon';
import ShieldIcon from '../Icon/ShieldIcon';
import EyeIcon from '../Icon/EyeIcon';
import EyeSlashIcon from '../Icon/EyeSlashIcon';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../states/AuthContext';
import { login } from '../services/NetworkCall';
import { errorAlert, successAlert } from '../component/Alert';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { setLoggedIn, setProfileData } = useContext(AuthContext);
    const [inData, setInData] = useState({ "emailOrMobile": localStorage.getItem("myEmailOrMobile"), "password": localStorage.getItem("myPassword"), "reminder": localStorage.getItem("myReminder") === "true" });
    const [error, setError] = useState({ "emailOrMobile": "", "password": "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInData((pre) => ({ ...pre, [name]: value }));
        setError((pre) => ({ ...pre, [name]: "" }));
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const checkHandler = (e) => {
        const { name, checked } = e.target;
        setInData((pre) => ({ ...pre, [name]: checked }));
    }

    const submitHandler = async (e) => {

        e.preventDefault();

        if (inData.reminder) {
            localStorage.setItem("myReminder", true);
            localStorage.setItem("myEmailOrMobile", inData.emailOrMobile);
            localStorage.setItem("myPassword", inData.password);
        } else {
            localStorage.removeItem("myReminder");
            localStorage.removeItem("myEmailOrMobile");
            localStorage.removeItem("myPassword");
        }


        let isValid = 1;

        if (!inData.emailOrMobile) {
            setError((prev) => ({ ...prev, email: "Required *" }));
            isValid = 2;
        }

        if (!inData.password) {
            setError((pre) => ({ ...pre, 'password': "Required *" }));
            isValid = 4;
        }

        if (isValid === 1) {
            setLoading(true);
            const payload = {
                "emailOrMobile": inData.emailOrMobile,
                "password": inData.password
            }

            const res = await login(payload);

            if (res.success) {
                setLoggedIn(true);
                setProfileData(res.data);
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("authToken", `${res.data.token}`);
                localStorage.setItem("profileData", JSON.stringify(res.data));
                successAlert({ message: res.message })
                navigate("/dashboard", { replace: true });
            } else {
                errorAlert({ message: res.message });
            }
            setLoading(false);
        }
    }
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
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3 text-start">
                                <Form.Label>Email Address / Mobile Number</Form.Label>
                                <div className="input-icon">
                                    <MailIcon />
                                    <Form.Control
                                        type="text"
                                        placeholder="TradieAdmin@gmail.com"
                                        required
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
                                        onClick={togglePasswordVisibility}
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
