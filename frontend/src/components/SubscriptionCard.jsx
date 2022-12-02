import React from "react";
import "../styles/SubscriptionCard.css";
const SubscriptionCard = () => {
  return (
    <div className="plans">
      <div className="pricing">
        <h1 className="pricing-heading">Pricing</h1>

        <div className="box-container">
          <div className="box">
            <h3>FULL TIME PASS 1</h3>
            <div className="price">
              <span>100 lei</span>
              <h3 className="month">1 month</h3>
              <p>
                <i className="fas fa-check">Unlimited access to all classes</i>
                <i className="fas fa-check">Access to all FitHub studios</i>
              </p>
            </div>
            <button className="buy-subscription-button">
              Buy subscription
            </button>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <h3>FULL TIME PASS 1</h3>
            <div className="price">
              <span>250 lei</span>
              <h3 className="month">3 months</h3>
              <p>
                <i className="fas fa-check">Unlimited access to all classes</i>
                <i className="fas fa-check">Access to all FitHub studios</i>
              </p>
            </div>
            <button className="buy-subscription-button">
              Buy subscription
            </button>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <h3>FULL TIME PASS 1</h3>
            <div className="price">
              <span>450 lei</span>
              <h3 className="month">6 months</h3>
              <p>
                <i className="fas fa-check">Unlimited access to all classes</i>
                <i className="fas fa-check">Access to all FitHub studios</i>
              </p>
            </div>
            <button className="buy-subscription-button">
              Buy subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
