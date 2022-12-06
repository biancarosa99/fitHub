import { SvgIcon } from "@mui/material";
import React from "react";
import "../styles/SubscriptionPricing.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
function CheckIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
    </SvgIcon>
  );
}

const SubscriptionCard = () => {
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

            {/* <div className="subscription-facility">
              <span>
                <CalendarMonthOutlinedIcon sx={{ color: "#f45b69" }} />
              </span>
              <span> One month full pass</span>
            </div> */}
          </div>

          <button className="buy-subscription-button">Buy subscription</button>
        </div>

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
                <CheckOutlinedIcon sx={{ color: "#f45b69" }} />
              </span>
              <span> Access to all FitHub studios</span>
            </div>
          </div>

          <button className="buy-subscription-button">Buy subscription</button>
        </div>

        <div className="box">
          <h3>FULL TIME PASS 1</h3>
          <div className="price">
            <span>100 lei</span>
          </div>

          <h3 className="month">1 month</h3>

          <div className="subscription-facilities">
            <div>
              <span>
                <CheckIcon sx={{ color: "#f45b69" }} />
              </span>
              <span> Unlimited access to all classes</span>
            </div>
            <div>
              <span>
                <CheckIcon sx={{ color: "#f45b69" }} />
              </span>
              <span> Access to all FitHub studios</span>
            </div>
          </div>

          <button className="buy-subscription-button">Buy subscription</button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionCard;
