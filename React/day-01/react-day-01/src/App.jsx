import { Component } from "react";
import Product from "./components/product/Product";
import "./assets/style.css";
export default class App extends Component {
  state = {
    products: [
      {
        id: 0,
        name: "Apple watch",
        brand: "Apple",
        price: 23,
        location: "us",
        quantity: 2,
      },
      {
        id: 1,
        name: "samsung s22 ultra",
        brand: "samsung",
        price: 23,
        location: "us",
        quantity: 2,
      },
      {
        id: 2,
        name: "google pixel",
        brand: "google",
        price: 23,
        location: "us",
        quantity: 2,
      },
      {
        id: 3,
        name: "moble xpire",
        brand: "sony",
        price: 23,
        location: "us",
        quantity: 2,
      },
    ],
  };

  componentDidMount() {
    const storedState = localStorage.getItem("products");
    if (storedState) {
      this.setState({ products: JSON.parse(storedState) });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("products", JSON.stringify(this.state.products));
  }

  increaseQuantity = (productId) => {
    console.log("Product Id => ", productId);
    let updatedProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    this.setState({ products: updatedProducts });
  };

  removeProduct = (productId) => {
    console.log("Product ID =>", productId);
    let updatedProducts = this.state.products.filter(
      (product) => product.id !== productId
    );
    this.setState({ products: updatedProducts });
  };
  handleToaddNewProduct = () => {
    // eslint-disable-next-line react/no-direct-mutation-state
    let lengthPro = this.state.products.length;
    let newProduct = {
      id: lengthPro++,
      name: "moble xpire",
      brand: "sony",
      price: 23,
      location: "us",
      quantity: 2,
    };
    this.setState((oldState) => ({
      products: [...oldState.products, newProduct],
    }));
  };
  render() {
    return (
      <>
        <div className="container my-5">
          <div className="row gy-3">
            {this.state.products.map((product) => (
              <Product
                productInfo={product}
                key={product.id}
                trackToUpdate={this.increaseQuantity}
                removProduct={this.removeProduct}
                addNewProduct={this.addNewProduct}
              />
            ))}
          </div>
          <button
            className=" btnAddNewProduct"
            onClick={this.handleToaddNewProduct}
          >
            {" "}
            ad new product
          </button>
        </div>
      </>
    );
  }
}
