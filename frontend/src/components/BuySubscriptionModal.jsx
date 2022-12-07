import React from "react";
import "../styles/BuySubscriptionModal.css";
import Modal from "../UI/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const BuySubscriptionModal = (props) => {
  return (
    <Modal>
      <div className="modal-container">
        <div className="buy-title-section">
          <div className="buy-title">Buy subscription?</div>
          <button className="close-button" onClick={props.closeBuySubscription}>
            <CloseRoundedIcon />
          </button>
        </div>

        <div className="subscription-details-section">
          <div className="subscription-name">{props.title}</div>

          <div className="subscription-location">
            <span className="icon">
              <LocationOnOutlinedIcon
                sx={{ color: "#f45b69", fontSize: "large" }}
              />
            </span>
            <span> Access to all FitHub clubs</span>
          </div>

          <div className="subscription-valability">
            <span className="icon">
              <CalendarMonthOutlinedIcon
                sx={{ color: "#f45b69", fontSize: "large" }}
              />
            </span>
            <span>Pass valability: {props.duration}</span>
          </div>

          <div className="subscription-price">
            <span className="icon">
              <CreditCardOutlinedIcon
                sx={{ color: "#f45b69", fontSize: "large" }}
              />
            </span>
            <span> Total Amount to pay: {props.price} lei</span>
          </div>
        </div>

        <div className="actions">
          <button className="action-button">Confirm</button>
          <button
            className="action-button"
            onClick={props.closeBuySubscription}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BuySubscriptionModal;
