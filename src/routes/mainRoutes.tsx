import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/projects",
        element: <Projects/>
    }
])

export default mainRoutes