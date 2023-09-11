import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout></DefaultLayout>,
        children: [
            {path: "/", element: <Home></Home>},
            {path: "/carrinho", element:  <Cart></Cart>},
        ]
    }
])

export function Router() {
    return (
        <RouterProvider router={router}/>  
    )
}