import { useContext } from "react";
import { authContext } from "../Auth/Auth";
import { Navigate, useLocation } from "react-router-dom";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(authContext)
    const location = useLocation();

    if (loader) {
        return <div className="h-[100vh] flex justify-center items-center">
            <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_p8bfn5to.json"
                style={{ height: '200px', width: '200px' }}
            >
                <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player>            
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>;
};

export default PrivateRoutes;