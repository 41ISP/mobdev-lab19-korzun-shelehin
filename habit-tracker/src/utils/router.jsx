import {createBrowserRouter} from "react-router-dom"
import Main from "../pages/Main/Main"
import History from "../pages/history/History"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/history",
        element: <History/>
    }
])