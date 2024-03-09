import { Component } from "react";
import Cookies from "cookies-js";
import Header from "../Header";

import "./index.css";

class Products extends Component {
  state = { productsList: [] };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const apiUrl = "https://apis.ccbp.in/products";
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok === true) {
      const fetchedData = await response.json();
      console.log(fetchedData);
      const updatedData = fetchedData.products.map((product) => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }));
      this.setState({
        productsList: updatedData,
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="product-container">
          <h1>Hii</h1>
        </div>
      </>
    );
  }
}
export default Products;
