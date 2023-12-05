import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import ScrollToTop from "../ScrollTop";
import { HomeRoute } from "./Home/HomeRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <ScrollToTop />
            <HomeLayout />
        </>,
        children: HomeRoute

    },
])

export default Router;