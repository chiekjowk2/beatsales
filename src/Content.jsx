import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import Beats from "./Pages/Beats/Beats.jsx"
import Cart from "./Pages/Cart/Cart.jsx"
import Checkout from "./Pages/Checkout/Checkout.jsx"
import Uploads from "./Pages/Uploads/Uploads.jsx"
import Home from "./Pages/Home/Home.jsx"
import Product from "./Pages/Product/Product.jsx"
import ErrorPage from "./Pages/ErrorPage.jsx"
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/home",
          element: <Home/>,
        }, 
        {
          path: "/beats",
          element: <Beats/>,

        },
        {
            path: "/beats/:id",
            element: <Product/>,
        },
        {
          path: "/cart",
          element: <Cart/>,
        }, 
        {
          path: "/checkout",
          element: <Checkout/>,
        },
        {
          path: "/Uploads",
          element: <Uploads/>,
        },
      ],
    }
    ])

const Content = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Content