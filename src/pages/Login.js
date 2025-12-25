import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import MailIcon from "../Icon/MailIcon";
import ShieldIcon from "../Icon/ShieldIcon";
import EyeIcon from "../Icon/EyeIcon";
import EyeSlashIcon from "../Icon/EyeSlashIcon";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../states/AuthContext";
import { login } from "../services/NetworkCall";
import { errorAlert, successAlert } from "../component/Alert";
import { InputField } from "../component/InputField";
import { Checkbox } from "../component/Checkbox";
import { Loader } from "../component/Loader";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { setLoggedIn, setProfileData } = useContext(AuthContext);
    const [inData, setInData] = useState({
        emailOrMobile: localStorage.getItem("myEmailOrMobile"),
        password: localStorage.getItem("myPassword"),
        reminder: localStorage.getItem("myReminder") === "true",
    });
    const [error, setError] = useState({ emailOrMobile: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInData((pre) => ({ ...pre, [name]: value }));
        setError((pre) => ({ ...pre, [name]: "" }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const checkHandler = (e) => {
        const { name, checked } = e.target;
        setInData((pre) => ({ ...pre, [name]: checked }));
    };

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
            setError((prev) => ({ ...prev, emailOrMobile: "Required *" }));
            isValid = 2;
        }

        if (!inData.password) {
            setError((pre) => ({ ...pre, password: "Required *" }));
            isValid = 4;
        }

        if (isValid === 1) {
            setLoading(true);
            const payload = {
                emailOrMobile: inData.emailOrMobile,
                password: inData.password,
            };

            const res = await login(payload);

            if (res.success) {
                setLoggedIn(true);
                setProfileData(res.data);
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("authToken", `${res.data.token}`);
                localStorage.setItem("profileData", JSON.stringify(res.data));
                successAlert({ message: res.message });
                navigate("/customers", { replace: true });
            } else {
                errorAlert({ message: res.message });
            }
            setLoading(false);
        }
    };
    return (
        <div>
            <Loader show={loading} />
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
                            <InputField
                                FormLabel="Email Address / Mobile Number"
                                FormType="text"
                                name="emailOrMobile"
                                FormPlaceHolder="Enter email OR Mobile"
                                value={inData?.emailOrMobile}
                                onChange={inputHandler}
                                error={error?.emailOrMobile}
                                startIcon={<MailIcon />}
                            />
                            <InputField
                                FormLabel="Password"
                                FormType={showPassword ? "text" : "password"}
                                name="password"
                                FormPlaceHolder="Enter password"
                                value={inData?.password}
                                error={error?.password}
                                onChange={inputHandler}
                                startIcon={<ShieldIcon />}
                                endIcon={showPassword ? (
                                    <EyeIcon
                                        className="text-secondary cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <EyeSlashIcon
                                        className="text-secondary cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            // endIcon={<EyeIcon />}
                            />
                            <Stack direction="horizontal" className='justify-content-between mt-3 mb-4' gap={3}>
                                <Checkbox
                                    type={"CheckBox"}
                                    className={"remember-check"}
                                    checked={inData.reminder}
                                    name={"reminder"}
                                    label={"Remember me"}
                                    id={'custom-check'}
                                    onClick={checkHandler}
                                />
                                <span className="forgot-link">Forgot password?</span>
                            </Stack>
                            <Button className="login-btn w-100" type="submit">
                                Log In
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
