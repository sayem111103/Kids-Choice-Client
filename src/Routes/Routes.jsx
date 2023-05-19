import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Addtoy from "../Pages/Addtoy/Addtoy";
import Mytoy from "../Pages/Mytoy/Mytoy";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'addatoy',
                element:<PrivateRoutes><Addtoy></Addtoy></PrivateRoutes>
            },
            {
                path:'mytoys',
                element:<PrivateRoutes><Mytoy></Mytoy></PrivateRoutes>
            }
        ]
    },

    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'registration',
                element:<Registration></Registration>
            }
        ]
    }
]);

export default router;