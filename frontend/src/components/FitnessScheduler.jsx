import React from "react";
import "../styles/FitnessScheduler.css";
import { timeTable } from "../assets/timeTableData";
import { useEffect } from "react";

const FitnessScheduler = () => {
  useEffect(() => {
    {
      timeTable.map((day) => {
        console.log(day);
      });
    }
  }, []);
  return (
    <React.Fragment>
      <h1 className="heading">FitHub1</h1>

      {timeTable.map((day) => (
        <div className="table-container">
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
                  <button className="join-class-button">Join Class</button>
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
