import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <nav className="nav-container">
    <div>
      <img
        src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1709984726/1156738_amazon_logo_ecommerce_shopping_icon_ccbpv1.png"
        alt="logo"
        className="logo"
      />
    </div>
    <ul className="list-items">
      <Link to="/" className="link">
        <li className="list">Home</li>
      </Link>
      <Link to="/products" className="link">
        <li className="list">Products</li>
      </Link>
      <Link to="/about" className="link">
        <li className="list">About</li>
      </Link>
    </ul>

    <Link to="/login" className="link">
      <button type="button" className="logout-button">
        Logout
      </button>
    </Link>
  </nav>
);
export default Header;
