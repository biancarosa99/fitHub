import React from "react";
import "../styles/UserSubscription.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const UserSubscription = () => {
  return (
    <div className="user-subscription-container">
      <h3>ACTIVE SUBSCRIPTION</h3>
      <div className="user-subscription">
        <h3>FULL TIME PASS 1</h3>

        <div className="price">
          <span>100 lei</span>
        </div>

        <h3 className="month">1 month</h3>

        <div className="subscription-details">
          <div className="subscription-detail">
            <PersonOutlineIcon sx={{ color: "#f45b69" }} />
            <div className="subscription-detail-row-name">User: </div>
            <div>bianca_rosa99@yahoo.com</div>
          </div>

          <div className="subscription-detail">
            <CalendarMonthOutlinedIcon
              sx={{ color: "#f45b69", fontSize: "large" }}
            />
            <div className="subscription-detail-row-name">Start Date: </div>
            <div>01/01/2023</div>
          </div>

          <div className="subscription-detail">
            <CalendarMonthOutlinedIcon
              sx={{ color: "#f45b69", fontSize: "large" }}
            />
            <div className="subscription-detail-row-name">End Date: </div>
            <div>01/02/2023</div>
          </div>

          <div className="subscription-detail">
            <LocationOnOutlinedIcon
              sx={{ color: "#f45b69", fontSize: "large" }}
            />
            <div className="subscription-detail-row-name">Locations: </div>
            <div>All FitHub Studios</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSubscription;
