import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";

import Login from "./pages/Login"
import Blog from "./pages/Blog"
import Single from "./pages/Single"
import Write from "./pages/Write"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Register from "./pages/Register";
import "./style.scss" 
import Portal from "./pages/Portal";
import PageNotFound from "./pages/PageNotFound";

const Layout = ()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/register",
    element: <Register/>,
  },
  {
    path:"/portal",
    element: <Layout/>,
    children:[
      {
        path:"/portal",
        element:<Portal/>
      }
    ]
  }
  ,
  {
    path:"/blog",
    element: <Layout/>,
    children:[
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/blog/post/:id",
        element:<Single/>
      },
      {
        path:"/blog/write",
        element:<Write/>
      },
    ]
  },
  {
    path: "*",
    element: <Layout/>,
    children:[
      {
        path:"*",
        element:<PageNotFound/>
      }
    ]
  },
]);

function App() {
  return (
    <div className="app">
      <div className="containerApps">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
