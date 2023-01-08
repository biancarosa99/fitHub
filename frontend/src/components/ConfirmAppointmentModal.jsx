import React, { useEffect } from "react";
import "../styles/ConfirmAppointmentModal.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Modal from "../UI/Modal";
import { useState } from "react";
import axios from "axios";

const ConfirmAppointmentModal = (props) => {
  const [occupiedSpots, setOccupiedSpots] = useState("");
  const className = props.className;
  const classLocation = props.classLocation;
  const classDate = props.classDate;
  const classId = props.classId;
  const classMaxSpots = props.classMaxSpots;

  const getNumberOfClassOccupiedSpots = async () => {
    try {
      const res = await axios.get(`/schedule/spots/${classId}`);
      setOccupiedSpots(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNumberOfClassOccupiedSpots();
  });

  const disableConfirmButton = classMaxSpots === occupiedSpots ? true : false;

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
          <div className="confirm-class-name">{className}</div>
          <div className="confirm-class-location">
            <div className="icon">
              <LocationOnOutlinedIcon
                sx={{ color: "#f45b69", fontSize: "large" }}
              />
            </div>
            <div className="text">{classLocation}</div>
          </div>

          <div className="confirm-class-date">
            <div className="icon date-icon">
              <CalendarMonthOutlinedIcon
                sx={{ color: "#f45b69", fontSize: "large" }}
              />
            </div>
            <div className="text"> {classDate}</div>
          </div>

          <div className="confirm-class-date">
            <div className="icon date-icon">
              <PeopleAltOutlinedIcon
                sx={{ color: "#f45b69", fontSize: "large" }}
              />
            </div>
            <div className="text">
              {occupiedSpots}/{classMaxSpots} Occupied spots
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="actions-button" disabled={disableConfirmButton}>
            Confirm
          </button>
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
