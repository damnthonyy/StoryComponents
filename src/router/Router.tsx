import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { ProfilPage } from "../pages/profilPage/ProfilPage";
import { ResetPassword } from "../pages/resetPassword/ResetPassword";
import { NotFound } from "../pages/404/NotFound";

const Router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Login/>,
        },

        {
            path:"/ProfilPage",
            element:<ProfilPage/>,
        },

        {
            path:"/ResetPassword",
            element:<ResetPassword/>,
        },

        {
            path:"*",
            element:<NotFound/>,
        },

    ]
)

export default Router;