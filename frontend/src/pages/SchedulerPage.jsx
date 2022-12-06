import React from "react";
import FitnessScheduler from "../components/FitnessScheduler";
import SubscriptionPricing from "../components/SubscriptionPricing";

const SchedulerPage = () => {
  return (
    <React.Fragment>
      <FitnessScheduler />
      <SubscriptionPricing />
    </React.Fragment>
  );
};

export default SchedulerPage;
