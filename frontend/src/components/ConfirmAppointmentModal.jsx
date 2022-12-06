import React from "react";
import "../styles/ConfirmAppointmentModal.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const ConfirmAppointmentModal = (props) => {
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal-container">
          <div className="confirm-title-section">
            <div className="confirm-title">Confirm Apppointement?</div>
            <button
              className="close-button"
              onClick={props.closeConfirmAppointment}
            >
              <CloseRoundedIcon />
            </button>
          </div>

          <div className="class-details-section">
            <div className="class-name">KANGOO JUMPS</div>
            <div className="class-location">
              <span className="icon">
                <LocationOnOutlinedIcon
                  sx={{ color: "#f45b69", fontSize: "large" }}
                />
              </span>
              <span> FitHub1</span>
            </div>
            <div className="class-date">
              <span className="icon">
                <CalendarMonthOutlinedIcon
                  sx={{ color: "#f45b69", fontSize: "large" }}
                />
              </span>
              <span> 6th December 2022 10:00-11:00</span>
            </div>
          </div>

          <div className="actions">
            <button className="action-button">Confirm</button>
            <button
              className="action-button"
              onClick={props.closeConfirmAppointment}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAppointmentModal;
