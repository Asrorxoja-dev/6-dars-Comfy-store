import ErrorElement from "./components/ErrorElement";
import {
  HomeLayout,
  About,
  Register,
  Landing,
  SingleProduct,
  Orders,
  Login,
  Error,
  Checkout
} from "./pages";
import  {Products}  from "./pages/Products";
import { loader as LandingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as ProductLoader } from "./pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <HomeLayout/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element: <Landing/>,
          errorElement: <ErrorElement/>,
          loader: LandingLoader
        },
        {
          path:"/products",
          element:<Products/>,
          loader:ProductLoader
        },
        {
          path:"/product/:id",
          element:<SingleProduct/>,
          loader:SingleProductLoader
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/checkout",
          element:<Checkout/>
        },
      ]
    },
    {
      path:"/login",
      errorElement:<Error/>,
      element:<Login/>
    },
    {
      path:"/register",
      errorElement:<Error/>,
      element:<Register/>
    }
  ]);
  return  <RouterProvider router={routes}/>;
}

export default App;
