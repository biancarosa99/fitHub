import React from "react";
import "../styles/SubscriptionPricing.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const SubscriptionPricing = (props) => {
  const [subscriptionTypes, setSubscriptiontypes] = useState([]);

  const getAllSubscriptionTypes = async () => {
    try {
      const res = await axios.get("/subscriptions/");
      setSubscriptiontypes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllSubscriptionTypes();
  }, []);

  return (
    <React.Fragment>
      <h1 className="heading">Pricing</h1>
      {subscriptionTypes.map((subscription, index) => {
        const subscriptionTypeName = subscription.name;
        const subscriptionTypePricing = subscription.price;
        const subscriptionTypeDuration = subscription.duration;
        const subscriptionTypeId = subscription.id;
        return (
          <section className="pricing" key={index}>
            <div className="box-container">
              <div className="box">
                <h3>{subscriptionTypeName}</h3>
                <div className="price">
                  <span>{subscriptionTypePricing} lei</span>
                </div>

                <h3 className="month">
                  {subscriptionTypeDuration}{" "}
                  {subscriptionTypeDuration === 1 ? "month" : "months"}
                </h3>

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
                  onClick={() =>
                    props.openBuySubscriptionModal(
                      subscriptionTypeId,
                      subscriptionTypeName,
                      subscriptionTypePricing,
                      subscriptionTypeDuration
                    )
                  }
                >
                  Buy subscription
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </React.Fragment>
  );
};

export default SubscriptionPricing;
