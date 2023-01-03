import React from "react";
import "../styles/SubscriptionPricing.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const SubscriptionCard = (props) => {
  return (
    <section className="pricing">
      <h1 className="heading">Pricing</h1>

      <div className="box-container">
        <div className="box">
          <h3>FULL TIME PASS 1</h3>
          <div className="price">
            <span>100 lei</span>
          </div>

          <h3 className="month">1 month</h3>

          <div className="subscription-facilities">
            <div className="subscription-facility">
              <span>
                <CheckOutlinedIcon sx={{ color: "#f45b69" }} />
              </span>
              <span> Unlimited access to all classes</span>
            </div>
            <div className="subscription-facility">
              <span>
                <LocationOnOutlinedIcon sx={{ color: "#f45b69" }} />
              </span>
              <span> Access to all FitHub studios</span>
            </div>
          </div>

          <button
            className="buy-subscription-button"
            onClick={props.openBuySubscriptionModal}
          >
            Buy subscription
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCard;
