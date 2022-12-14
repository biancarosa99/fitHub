import React from "react";
import AddFitnessClass from "../components/AddFitnessClass";
import TrainerFutureClasses from "../components/TrainerFutureClasses";

const TrainerClassesPage = () => {
  return (
    <React.Fragment>
      <TrainerFutureClasses />
      <AddFitnessClass />
    </React.Fragment>
  );
};

export default TrainerClassesPage;
