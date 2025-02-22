import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/Auth/LogIn";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";

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
            },
            {
                path:"/add-task",
                element:<AddTask/>
            }
        ]
    }

])