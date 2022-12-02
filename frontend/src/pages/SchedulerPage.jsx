import React from "react";
import FitnessScheduler from "../components/FitnessScheduler";
import SubscriptionCard from "../components/SubscriptionCard";

const SchedulerPage = () => {
  return (
    <React.Fragment>
      <FitnessScheduler />
      <SubscriptionCard />
    </React.Fragment>
  );
};

export default SchedulerPage;
