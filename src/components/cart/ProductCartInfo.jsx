import axios from "axios";
import React from "react";
import getConfig from "../../utils/getConfig";
import "./styles/productCartInfo.css";

const ProductCartInfo = ({ product, getAllProductsCart }) => {
  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`;

    axios
      .delete(URL, getConfig())
      .then(() => {
        getAllProductsCart();
      })
      .catch((err) => console.log(err));
  };

  return (
    <article className="cart__item">
      <header className="cart__item-header">
        <h3 className="cart__category">{product.brand}</h3>
        <h3 className="cart__name">{product.title}</h3>
      </header>
      <box-icon onClick={handleDeleteProduct} name="trash"></box-icon>

      <br />
      <span className="cart__quantity">{product.productsInCart.quantity}</span>
      <div className="cart__item-footer">
        <span className="cart__total-label">Total:</span>
        <p className="cart__total-number"> {product.price}</p>
      </div>
    </article>
  );
};

export default ProductCartInfo;
