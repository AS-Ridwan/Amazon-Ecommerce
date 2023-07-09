import React from "react";
import "./Inventory.css";

const Inventory = ({ cartItem }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const item of cartItem) {
    quantity = item.quantity;
    total = total + item.price * item.quantity;
    shipping = shipping + item.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <div className="row">
        <div className="  col-12 col-md-6 col-lg-6 col-xl-8">
          <div>
            {" "}
            <h3 className="pl-5">Billing Details </h3>
          </div>
          <form
            className="row contact_form"
            action="#"
            method="post"
            noValidate="noValidate"
          >
            <div className="col-md-6 form-group p_star">
              <input
                type="text"
                className="form-control"
                id="first"
                name="name"
                placeholder="First Name*"
              />
              <span
                className="placeholder"
                data-placeholder="First name"
              ></span>
            </div>
            <div className="col-md-6 form-group p_star">
              <input
                type="text"
                className="form-control"
                id="last"
                name="name"
                placeholder="Last Name*"
              />
              <span className="placeholder" data-placeholder="Last name"></span>
            </div>
            <div className="col-md-12 form-group">
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                placeholder="Company name"
              />
            </div>
            <div className="col-md-6 form-group p_star">
              <input
                type="text"
                className="form-control"
                id="number"
                name="number"
                placeholder="Phone number*"
              />
              <span
                className="placeholder"
                data-placeholder="Phone number"
              ></span>
            </div>
            <div className="col-md-6 form-group p_star">
              <input
                type="text"
                className="form-control"
                id="email"
                name="compemailany"
                placeholder="Email Address*"
              />
              <span
                className="placeholder"
                data-placeholder="Email Address"
              ></span>
            </div>
            <div className="col-md-12 form-group p_star">
              <select className="country_select">
                <option value="1">Country</option>
                <option value="2">Country</option>
                <option value="4">Country</option>
              </select>
              <div className="nice-select country_select" tabIndex="0">
                <span className="current">Country</span>
                <ul className="list">
                  <li value="1" className="option selected">
                    Country
                  </li>
                  <li value="2" className="option">
                    Country
                  </li>
                  <li value="4" className="option">
                    Country
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 form-group p_star">
              <input
                type="text"
                className="form-control"
                id="add1"
                name="add1"
                placeholder="Address"
              />
              <span
                className="placeholder"
                data-placeholder="Address line 01"
              ></span>
            </div>
            <div className="col-md-12 form-group p_star">
              <input
                type="text"
                className="form-control"
                id="add2"
                name="add2"
                placeholder="Town/City"
              />
              <span
                className="placeholder"
                data-placeholder="Address line 02"
              ></span>
            </div>
            <div className="col-md-12 form-group p_star">
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="District"
              />
              <span className="placeholder" data-placeholder="Town/City"></span>
            </div>
            <div className="col-md-12 form-group p_star">
              <select className="country_select">
                <option value="1">District</option>
                <option value="2">District</option>
                <option value="4">District</option>
              </select>
              <div className="nice-select country_select" tabIndex="0">
                <span className="current">District</span>
                <ul className="list">
                  <li data-value="1" className="option selected">
                    District
                  </li>
                  <li data-value="2" className="option">
                    District
                  </li>
                  <li data-value="4" className="option">
                    District
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 form-group">
              <input
                type="text"
                className="form-control"
                id="zip"
                name="zip"
                placeholder="Postcode/ZIP"
              />
            </div>
            <div className="col-md-12 form-group">
              <div className="creat_account">
                <input type="checkbox" id="f-option2" name="selector" />
                <label htmlFor="f-option2" className="pl-2">
                  {" "}
                  Create an account?{" "}
                </label>
              </div>
            </div>
            <div className="col-md-12 form-group">
              <div className="creat_account">
                <h3>Shipping Details</h3>
                <input type="checkbox" id="f-option3" name="selector" />
                <label htmlFor="f-option3" className="pl-2">
                  Ship to a different address?
                </label>
              </div>
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="1"
                placeholder="Order Notes"
              ></textarea>
            </div>
          </form>
        </div>
        {/* ======= */}
        {/* ======= */}
        <div className=" col-12 col-md-6 col-lg-6 col-xl-4 ">
          <div className="order_box">
            <h2>Your Order</h2>
            <ul className="list">
              <li className="middle">
                <span> Products</span>
                <span> Total</span>
              </li>
              <hr></hr>
              {cartItem.map((c) => (
                <li key={c.id}>
                  <span>
                    {c.name} <span className="middle"> x {c.quantity}</span>{" "}
                  </span>

                  <span className="last">${c.price}</span>
                </li>
              ))}
            </ul>
            <hr></hr>
            <ul className="list list_2">
              <li className="middle">
                <span> Shipping</span>
                <span>${shipping}</span>
              </li>
              <li className="middle">
                <span>Tax</span>
                <span>${tax}</span>
              </li>
              <li className="middle">
                <span>Total</span>
                <span>{grandTotal}</span>
              </li>
            </ul>
            <div className="payment_item">
              <div className="radion_btn">
                <input type="radio" id="f-option5" name="selector" />
                <label htmlFor="f-option5" className="middle pl-2">
                  Check payments
                </label>
                <div className="check"></div>
              </div>
              <p>
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </div>
            <div className="payment_item active">
              <div className="radion_btn">
                <input type="radio" id="f-option6" name="selector" />
                <label htmlFor="f-option6" className="middle pl-2">
                  Paypal{" "}
                </label>
                <img src="img/product/card.jpg" alt="" />
                <div className="check"></div>
              </div>
              <p>
                Pay via PayPal; you can pay with your credit card if you don’t
                have a PayPal account.
              </p>
            </div>
            <div className="creat_account">
              <input type="checkbox" id="f-option4" name="selector" />
              <label htmlFor="f-option4" className="pl-2">
                I’ve read and accept the{" "}
              </label>
              <a href="love" className="pl-2">
                terms &amp; conditions*
              </a>
            </div>
            <button className="primary-btn btn-proceed">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
