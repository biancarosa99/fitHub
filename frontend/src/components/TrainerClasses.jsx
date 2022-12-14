import React, { useState } from "react";
import "../styles/TrainerClasses.css";
import Pagination from "@mui/material/Pagination";
import { useMediaQuery } from "react-responsive";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const TrainerClasses = (props) => {
  const [upcomingClassesVisible, setUpcomingClassesVisible] = useState(true);
  const [pastClassesVisible, setPastClassesVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 548px)" });

  const paginationComponentSize = isMobile ? "small" : "large";

  let classesActionsClassName = upcomingClassesVisible
    ? "trainer-table-see-past-classes"
    : "trainer-table-see-future-classes";

  const fabPinkStyle = {
    color: "common.white",
    bgcolor: "#f45b69",
    "&:hover": {
      bgcolor: "#f5717d",
    },
    zIndex: 0,
  };

  const makePreviousClassesVisible = () => {
    setUpcomingClassesVisible(false);
    setPastClassesVisible(true);
  };

  const makeFutureClassesVisible = () => {
    setPastClassesVisible(false);
    setUpcomingClassesVisible(true);
  };

  return (
    <React.Fragment>
      <div className="trainer-table-actions-container">
        <div className="table-title-container">
          <h3 className="table-title">
            {upcomingClassesVisible && "UPCOMING CLASSES"}
            {pastClassesVisible && "PREVIOUS CLASSES"}
          </h3>
        </div>
        <div className="table-see-classes">
          {upcomingClassesVisible && (
            <div className={classesActionsClassName}>
              <KeyboardArrowLeftIcon
                sx={{ cursor: "pointer" }}
                onClick={makePreviousClassesVisible}
              />
              <span
                className="table-classes"
                onClick={makePreviousClassesVisible}
              >
                PREVIOUS CLASSES
              </span>
            </div>
          )}

          {pastClassesVisible && (
            <div className={classesActionsClassName}>
              <span
                className="table-classes"
                onClick={makeFutureClassesVisible}
              >
                FUTURE CLASSES
              </span>
              <KeyboardArrowRightIcon
                sx={{ cursor: "pointer" }}
                onClick={makeFutureClassesVisible}
              />
            </div>
          )}
        </div>
      </div>
      <div className="trainer-future-classes-table-container">
        <table className="trainer-classes-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Class</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Date" className="fitness-class-start-hour">
                12/12/20 10:00
              </td>
              <td data-label="Class">TABATA FITNESS</td>
              <td data-label="Location">FitHub1</td>
              <td>
                <button
                  className="view-participants-button"
                  onClick={props.openViewParticipantsList}
                >
                  View Particiants
                </button>
              </td>
            </tr>

            <tr>
              <td data-label="Date" className="fitness-class-start-hour">
                12/12/20 10:00
              </td>
              <td data-label="Class">TABATA FITNESS</td>
              <td data-label="Location">FitHub1</td>
              <td>
                <button
                  onClick={props.openViewParticipantsList}
                  className="view-participants-button"
                >
                  View Particiants
                </button>
              </td>
            </tr>

            <tr>
              <td data-label="Date" className="fitness-class-start-hour">
                12/12/20 10:00
              </td>
              <td data-label="Class">TABATA FITNESS</td>
              <td data-label="Location">FitHub1</td>
              <td>
                <button className="view-participants-button">
                  View Particiants
                </button>
              </td>
            </tr>

            <tr>
              <td data-label="Date" className="fitness-class-start-hour">
                12/12/20 10:00
              </td>
              <td data-label="Class">TABATA FITNESS</td>
              <td data-label="Location">FitHub1</td>
              <td>
                <button className="view-participants-button">
                  View Particiants
                </button>
              </td>
            </tr>

            <tr>
              <td data-label="Date" className="fitness-class-start-hour">
                12/12/20 10:00
              </td>
              <td data-label="Class">TABATA FITNESS</td>
              <td data-label="Location">FitHub1</td>
              <td>
                <button className="view-participants-button">
                  View Particiants
                </button>
              </td>
            </tr>

            <tr>
              <td data-label="Date" className="fitness-class-start-hour">
                12/12/20 10:00
              </td>
              <td data-label="Class">TABATA FITNESS</td>
              <td data-label="Location">FitHub1</td>
              <td>
                <button className="view-participants-button">
                  View Particiants
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination-container">
          <Pagination count={10} size={paginationComponentSize} />
        </div>
        <div className="add-fitness-class-container">
          <Fab
            sx={fabPinkStyle}
            aria-label="add"
            onClick={props.toggleAddClass}
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TrainerClasses;
