/* eslint-disable react/prop-types */
import { Component } from "react";

export default class Product extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    let { name, price, location, quantity, id } = this.props.productInfo;
    return (
      <>
        <div className="card col-lg-3 text-center">
          <div className="content-card">
            <h2>title : {name}</h2>
            <h2>price : {price}</h2>
            <h2>location : {location}</h2>
            <h2>qountity : {quantity}</h2>
            <button
              className="btn btn-info"
              onClick={() => this.props.trackToUpdate(id)}
            >
              increase qountity
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.removProduct(id);
              }}
            >
              remove
            </button>
          </div>
        </div>
      </>
    );
  }
}
