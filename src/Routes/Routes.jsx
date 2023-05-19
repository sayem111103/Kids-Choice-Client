import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
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