import Layout from "../component/layout";
import AboutUs from "../features/AboutUs";
import Feature from "../features/Feature";
import FrontPage from "../component/reuseables/frontPage";


export const Routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <FrontPage/>,
            },
            {
                path: "/about-us",
                element:<AboutUs/>
            },
            {
                path: "/feature",
                element: <Feature/>
            }
        ]
    }
]