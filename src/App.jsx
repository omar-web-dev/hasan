import { RouterProvider } from "react-router-dom"
import routes from "./routes/routes"

function App() {
  

  return (
     <div className="max-w-1200px mx-auto">
         <RouterProvider router={routes} />
     </div>
      
  )
}

export default App
