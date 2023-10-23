
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom"
import "./index.css"
import { ROUTES } from './routes/Routes'

const router = createHashRouter(ROUTES)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
