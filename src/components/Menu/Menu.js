import { Link } from "react-router-dom";
import "./menu.scss";
import Home from "./home.svg"
import Calendar from "./calendar.svg"
import Product from "./product.svg"
import Order from "./order.svg"

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="listItem">
            <img src={Home} alt=""/>
            <span className="ListItemTitle">Home</span>
        </Link>
        <Link to="/products" className="listItem">
            <img src={Product} alt=""/>
            <span className="ListItemTitle">Products</span>
        </Link>
        <Link to="/orders" className="listItem">
            <img src={Order} alt=""/>
            <span className="ListItemTitle">Orders</span>
        </Link>
        <span className="title">General</span>
        <Link to="/" className="listItem">
            <img src={Calendar} alt=""  />
            <span className="listItemTitle">Calendar</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;