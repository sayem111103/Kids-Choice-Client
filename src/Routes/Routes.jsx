import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Addtoy from "../Pages/Addtoy/Addtoy";
import Mytoy from "../Pages/Mytoy/Mytoy";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../Pages/Error/Error";
import Alltoy from "../Pages/Alltoy/Alltoy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'alltoys',
                element: <Alltoy></Alltoy>,
                loader: ()=> fetch('https://toy-marketplace-server-sayem111103.vercel.app/allToy')
            },
            {
                path: 'addtoy',
                element: <PrivateRoutes><Addtoy></Addtoy></PrivateRoutes>
            },
            {
                path: 'mytoys',
                element: <PrivateRoutes><Mytoy></Mytoy></PrivateRoutes>
            }
        ]
    },

    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            }
        ]
    }
]);

export default router;