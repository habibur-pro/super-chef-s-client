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
        loader: () => fetch('http://localhost:5000/chefs'),
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/reviews')

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
                loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.chefId}`)

            }
        ]
    }
])
export default router