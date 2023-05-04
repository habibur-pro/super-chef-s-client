import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import ChefDetails from "../pages/ChefDetails";
import PrivetRoute from "./PrivetRoute";
import NotFound from "../pages/NotFound";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        loader: () => fetch('https://super-cheps-server-assignment-10-habibur-pro.vercel.app/chefs'),
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://super-cheps-server-assignment-10-habibur-pro.vercel.app/reviews')

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
                path: '/chefs/:chefId',
                element: <PrivetRoute><ChefDetails /></PrivetRoute>,
                loader: ({ params }) => fetch(`https://super-cheps-server-assignment-10-habibur-pro.vercel.app/chefs/${params.chefId}`)

            }
        ]
    }
])
export default router