import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="bg-container">
          <h1 className="store-heading">This, is Your Groceries Store</h1>
          <h1 className="heading">
            Welcome to [Your E-commerce Store] <br />
            Where Shopping Meets Convenience!
          </h1>
          <p className="description">
            Welcome to [Your E-commerce Store]: Where Shopping Meets <br />
            Convenience! Explore a diverse range of products, from fashion and{" "}
            <br />
            electronics to home essentials, all in one place. Enjoy seamless
            browsing, secure payments, and fast delivery <br /> making your
            shopping experience hassle-free and enjoyable.
          </p>
          <Link to="/products" className="link">
            <button type="button" className="shop-now">
              Shop Now
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default Home;
