import React from "react";
import "../styles/FitnessScheduler.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { timeTable } from "../assets/timeTableData";
import { useEffect } from "react";

const FitnessScheduler = (props) => {
  useEffect(() => {
    timeTable.forEach((day) => {
      console.log(day);
    });
  }, []);
  return (
    <React.Fragment>
      <div className="heading">
        <h1 className="heading-title">FitHub1</h1>
        <div className="dropdown">
          <ArrowDropDownIcon
            sx={{ color: "#f45b69", fontSize: 60, cursor: "pointer" }}
          />
          <div className="dropdown-content">
            <div className="location-option">FitHub1</div>
            <div className="location-option">FitHub2</div>
            <div className="location-option">FitHub3</div>
          </div>
        </div>
      </div>

      {timeTable.map((day, index) => (
        <div className="table-container" key={index}>
          <table className="table">
            <caption>{day}</caption>
            <tbody>
              <tr>
                <td data-lable="Start Hour" className="fitness-start-hour-cell">
                  10:00
                </td>
                <td data-lable="Fitness Class Name"> Kangoo Jumps</td>
                <td data-lable="Avalable spots">5/17</td>
                <td data-lable="Actions">
                  <button
                    className="join-class-button"
                    onClick={props.openConfirmAppointment}
                  >
                    Join Class
                  </button>
                </td>
              </tr>

              <tr>
                <td data-lable="Start Hour" className="fitness-start-hour-cell">
                  11:00
                </td>
                <td data-lable="Fitness Class Name">Tabata</td>
                <td data-lable="Avalable spots">5/17</td>
                <td data-lable="Actions">
                  <button className="join-class-button">Join Class</button>
                </td>
              </tr>
              <tr>
                <td data-lable="Start Hour" className="fitness-start-hour-cell">
                  18:00
                </td>
                <td data-lable="Fitness Class Name"> Fitbalance</td>
                <td data-lable="Avalable spots">5/17</td>
                <td data-lable="Actions">
                  <button className="join-class-button">Join Class</button>
                </td>
              </tr>
              <tr>
                <td data-lable="Start Hour" className="fitness-start-hour-cell">
                  19:00
                </td>
                <td data-lable="Fitness Class Name"> Cycling</td>
                <td data-lable="Avalable spots">5/17</td>
                <td data-lable="Actions">
                  <button className="join-class-button">Join Class</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </React.Fragment>
  );
};

export default FitnessScheduler;
