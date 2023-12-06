import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import ScrollToTop from "../ScrollTop";
import { HomeRoute } from "./Home/HomeRoute";
import { ComponentsRoute } from "./ComponentsRoute/ComponentsRout";
import CompontsLayout from "../Layouts/CompontsLayout";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <ScrollToTop />
            <HomeLayout />
        </>,
        children: HomeRoute

    },
    {
        path: "/component",
        element: <>
            <ScrollToTop />
            <CompontsLayout />
        </>,
        children: ComponentsRoute
    }
])

export default Router;