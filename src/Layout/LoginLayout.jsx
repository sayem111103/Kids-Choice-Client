import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const LoginLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default LoginLayout;