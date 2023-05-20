import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const LoginLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='w-[95%] mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default LoginLayout;