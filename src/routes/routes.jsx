import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import ChefDetails from "../pages/ChefDetails";
import PrivetRoute from "./PrivetRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        loader: () => fetch('http://localhost:5000/chefsdata'),
        children: [
            {
                path: '/',
                element: <Home />,

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chefs/:id',
                element: <PrivetRoute><ChefDetails /></PrivetRoute>

            }
        ]
    }
])
export default router