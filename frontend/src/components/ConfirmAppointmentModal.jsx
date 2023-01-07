import React from "react";
import "../styles/ConfirmAppointmentModal.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Modal from "../UI/Modal";

const ConfirmAppointmentModal = (props) => {
  return (
    <Modal>
      <div className="modal-container">
        <div className="confirm-title-section">
          <div className="confirm-title">Confirm Apppointment?</div>
          <button
            className="close-button"
            onClick={props.closeConfirmAppointment}
          >
            <CloseRoundedIcon />
          </button>
        </div>

        <div className="confirm-class-details-section">
          <div className="confirm-class-name">KANGOO JUMPS</div>
          <div className="confirm-class-location">
            <div className="icon">
              <LocationOnOutlinedIcon
                sx={{ color: "#f45b69", fontSize: "large" }}
              />
            </div>
            <div className="text"> FitHub1</div>
          </div>
          <div className="confirm-class-date">
            <div className="icon date-icon">
              <CalendarMonthOutlinedIcon
                sx={{ color: "#f45b69", fontSize: "large" }}
              />
            </div>
            <div className="text"> 6th December 2022 10:00-11:00</div>
          </div>
        </div>

        <div className="actions">
          <button className="actions-button">Confirm</button>
          <button
            className="actions-button"
            onClick={props.closeConfirmAppointment}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmAppointmentModal;
