import React from "react";
import "../styles/ViewParticipantsList.css";
import Modal from "../UI/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
];

const ViewParticipantsList = (props) => {
  return (
    <Modal>
      <div className="participants-container">
        <div className="participants-list-title-section">
          <div className="participants-list-title">Participants List</div>
          <button
            className="close-button"
            onClick={props.closeViewParticipantsList}
          >
            <CloseRoundedIcon />
          </button>
        </div>

        <div className="participants-list-container">
          <div className="participants">
            {array.map((participant, index) => {
              return (
                <div className="participant-name" key={index}>
                  element
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewParticipantsList;
