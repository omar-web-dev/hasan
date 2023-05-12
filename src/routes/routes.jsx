import { createBrowserRouter } from "react-router-dom"
import Main from "../main/Main"
import SimpleSlider from "../pages/SimpleSlider/SimpleSlider"



const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <div>this is a home page</div>
            },
            {
                path: "simple-slider",
                element: <SimpleSlider/>
            }
        ],
        
    }
])


export default routes