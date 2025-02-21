import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/Auth/LogIn";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/log-in",
                element:<LogIn/>
            }
        ]
    }

])