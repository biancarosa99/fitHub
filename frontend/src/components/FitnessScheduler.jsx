import React from "react";
import "../styles/FitnessScheduler.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { weekDays } from "../assets/timeTableData";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const FitnessScheduler = (props) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [locations, setLocations] = useState([]);
  const [timetableLocation, setTimetableLocation] = useState("");
  const [fitnessSchedule, setFitnessSchedule] = useState({});

  const dayjs = require("dayjs");

  let scheduleByDays = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Frday: [],
    Saturday: [],
  };

  const getLocations = async () => {
    try {
      const res = await axios.get("/location/");
      setLocations(res.data);
      setTimetableLocation(res.data[0].name);
    } catch (error) {
      console.log(error);
    }
  };

  const getClassesForEachWeekDay = (schedule) => {
    schedule.forEach((fitnessClass) => {
      const dayOfWeek = dayjs(fitnessClass.date).format("dddd");
      console.log(dayOfWeek);
      scheduleByDays[dayOfWeek].push(fitnessClass);
    });
  };

  const getFitnessSchedule = async () => {
    try {
      const res = await axios.get("/schedule/", {
        params: {
          locationId: timetableLocation.id,
        },
      });

      const schedule = res.data;

      if (schedule) {
        getClassesForEachWeekDay(schedule);
        setFitnessSchedule(scheduleByDays);
        console.log(fitnessSchedule);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocations();
    getFitnessSchedule();
  }, []);

  useEffect(() => {
    getFitnessSchedule();
  }, [timetableLocation]);

  const handleDropDownArrowClick = () => {
    setIsDropDownOpen((prev) => !prev);
    console.log(isDropDownOpen);
    console.log(visibleDropDown);
  };

  const visibleDropDown = isDropDownOpen ? "block" : "none";

  return (
    <React.Fragment>
      <div className="heading">
        <h1 className="heading-title">{timetableLocation}</h1>
        <div className="dropdown">
          <ArrowDropDownIcon
            sx={{
              color: "#f45b69",
              fontSize: 60,
              cursor: "pointer",
              marginTop: 1,
            }}
            onClick={handleDropDownArrowClick}
          />
          <div className="dropdown-content">
            {locations.map((location, index) => (
              <div
                className="location-option"
                key={index}
                onClick={() => setTimetableLocation(location.name)}
              >
                {location.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {weekDays.map((day, index) => (
        <div className="table-container" key={index}>
          <table className="table">
            <caption>{day}</caption>
            <tbody>
              {fitnessSchedule[day] &&
                fitnessSchedule[day].map((scheduledClass, index) => (
                  <tr key={index}>
                    <td
                      data-lable="Start Hour"
                      className="fitness-start-hour-cell"
                    >
                      11:00
                    </td>
                    <td data-lable="Fitness Class Name">
                      {scheduledClass.fitnessClass.name}
                    </td>
                    <td data-lable="Avalable spots">
                      nu uita sa completezi/{scheduledClass.max_spots}
                    </td>
                    <td data-lable="Actions">
                      <button
                        className="join-class-button"
                        onClick={props.openConfirmAppointment}
                      >
                        Join Class
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </React.Fragment>
  );
};

export default FitnessScheduler;
