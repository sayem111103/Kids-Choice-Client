import { useContext } from "react";
import { authContext } from "../Auth/Auth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(authContext)
    const location = useLocation();

    if (loader) {
        return <div className="h-[100vh] flex justify-center items-center">
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoutes;