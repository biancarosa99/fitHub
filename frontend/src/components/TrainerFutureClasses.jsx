import React from "react";
import "../styles/TrainerFutureClasses.css";
import Pagination from "@mui/material/Pagination";
import { useMediaQuery } from "react-responsive";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TrainerFutureClasses = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 548px)" });

  const paginationComponentSize = isMobile ? "small" : "large";

  const fabPinkStyle = {
    color: "common.white",
    bgcolor: "#f45b69",
    "&:hover": {
      bgcolor: "#f5717d",
    },
  };

  return (
    <div className="table-container">
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
        <Fab sx={fabPinkStyle} aria-label="add" onClick={props.handleClick}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default TrainerFutureClasses;
