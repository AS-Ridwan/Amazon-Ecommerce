import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SharedBtn from "../SharedBtn/SharedBtn";

const Orders = ({ handleInventory }) => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();
  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/inventory" onClick={() => handleInventory(cart)}>
            <SharedBtn>
              Proceed Checkout{" "}
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </SharedBtn>{" "}
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
