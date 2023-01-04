import React from "react";
import "../styles/UserClasses.css";
import Pagination from "@mui/material/Pagination";
import { useMediaQuery } from "react-responsive";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
// import { Fab } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import zIndex from "@mui/material/styles/zIndex";

const UserFutureClasses = (props) => {
  const [upcomingClassesVisible, setUpcomingClassesVisible] = useState(true);
  const [pastClassesVisible, setPastClassesVisible] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 548px)" });

  const paginationComponentSize = isMobile ? "small" : "large";

  let classesActionsClassName = upcomingClassesVisible
    ? "table-see-past-classes"
    : "table-see-future-classes";
  // const fabPinkStyle = {
  //   color: "common.white",
  //   bgcolor: "#f45b69",
  //   "&:hover": {
  //     bgcolor: "#f5717d",
  //   },
  //   zIndex: 0,
  // };

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
      <div className="table-actions-container">
        <div className="table-title-container">
          <h3 className="table-title">
            {upcomingClassesVisible && "UPCOMING CLASSES"}
            {pastClassesVisible && "PREVIOUS CLASSES"}{" "}
          </h3>
        </div>
        <div className="table-see-classes">
          {upcomingClassesVisible && (
            <div
              className={classesActionsClassName}
              onClick={makePreviousClassesVisible}
            >
              <KeyboardArrowLeftIcon /> PREVIOUS CLASSES
            </div>
          )}

          {pastClassesVisible && (
            <div
              className={classesActionsClassName}
              onClick={makeFutureClassesVisible}
            >
              FUTURE CLASSES
              <KeyboardArrowRightIcon />
            </div>
          )}
        </div>
      </div>

      <div className="table-container">
        <table className="user-classes-table">
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
                  className="cancel-class-button"
                  onClick={props.openCancelClassModal}
                >
                  Cancel Class
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
                  onClick={props.openCancelClassModal}
                  className="cancel-class-button"
                >
                  Cancel Class
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
                  className="cancel-class-button"
                  onClick={props.openCancelClassModal}
                >
                  Cancel Class
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
                  className="cancel-class-button"
                  onClick={props.openCancelClassModal}
                >
                  Cancel Class
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
                  className="cancel-class-button"
                  onClick={props.openCancelClassModal}
                >
                  Cancel Class
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
                  className="cancel-class-button"
                  onClick={props.openCancelClassModal}
                >
                  Cancel Class{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination-container">
          <Pagination count={10} size={paginationComponentSize} />
        </div>
        {/* <div className="add-fitness-class-container">
        <Fab sx={fabPinkStyle} aria-label="add" onClick={props.toggleAddClass}>
          <AddIcon />
        </Fab>
      </div> */}
      </div>
    </React.Fragment>
  );
};

export default UserFutureClasses;
