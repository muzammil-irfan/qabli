import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from './pages/Login';
import AdminDashboard from "./pages/admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import AdminProducts from "./pages/admin/Products";
import AdminVendor from "./pages/admin/Vendor";
import AdminCommission from "./pages/admin/Commission";
import AdminOffer from "./pages/admin/Offer";
import AdminOrder from "./pages/admin/Order";
import AdminListing from "./pages/admin/Listing";
import AdminUser from "./pages/admin/User";
import AdminChat from "./pages/admin/Chat";

const routes = createBrowserRouter([
    {
        path:"/signup",
        element: <Signup />
    },
    {
        path:"/login",
        element: <Login />
    },
    {
        path:"/",
        element:<AdminLayout />,
        children:[
            {
                path:"/",
                element: <AdminDashboard />
            },
            {
                path:"product",
                element: <AdminProducts />
            },
            {
                path:"vendor",
                element: <AdminVendor />
            },
            {
                path:"commission",
                element: <AdminCommission />
            },
            {
                path:"offer",
                element: <AdminOffer />
            },
            {
                path:"order",
                element: <AdminOrder />
            },
            {
                path:"listing",
                element: <AdminListing />
            },
            {
                path:"user",
                element: <AdminUser />
            },
            
        ]
    },
    {
        path:"chat",
        element: <AdminChat />
    }
    
])

export default routes;