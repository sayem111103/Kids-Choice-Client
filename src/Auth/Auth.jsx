import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const authContext = createContext();
const auth = getAuth(app);
const Auth = ({children}) => {
    const user = false;

    const value = {
        user,
        auth
    }

    return <authContext.Provider value={value}>{children}</authContext.Provider>
};

export default Auth;