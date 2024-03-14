import "./App.css";
import Home from "./Home/Home";
import "./styles/global.scss";
import Products from "./products/Products"
import Menu from "./components/Menu/Menu"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
              <Outlet />
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />, 
        },
        {
          path: "/products",
          element: <Products/>,
        },]
      }
      ]);
    

      return <RouterProvider router={router} />;
}

export default App;
