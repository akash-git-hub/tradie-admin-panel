import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../states/AuthContext";

const PublicAuth = () => {
    const { loggedIn } = useContext(AuthContext);
    return loggedIn ? <Navigate to="/customers" replace /> : <Outlet />;
};

export default PublicAuth;
