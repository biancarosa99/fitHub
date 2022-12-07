import React, { useState } from "react";
import BuySubscriptionModal from "../components/BuySubscriptionModal";
import ConfirmAppointmentModal from "../components/ConfirmAppointmentModal";
import FitnessScheduler from "../components/FitnessScheduler";
import SubscriptionPricing from "../components/SubscriptionPricing";

const SchedulerPage = () => {
  const [isAppoinmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isBuySubscriptionModalOpen, setIsBuySubscriptionModalOpen] =
    useState(false);

  const openConfirmAppointmentModalHandler = () => {
    setIsAppointmentModalOpen(true);
    console.log("modal opened");
  };

  const closeConfirmAppointmentModalHandler = () => {
    setIsAppointmentModalOpen(false);
    console.log("modal opened");
  };

  const openBuySubscriptionModalHandler = () => {
    setIsBuySubscriptionModalOpen(true);
    console.log("modal opened");
  };

  const closeBuySubscriptionModalModalHandler = () => {
    setIsBuySubscriptionModalOpen(false);
    console.log("modal opened");
  };
  return (
    <React.Fragment>
      <FitnessScheduler
        openConfirmAppointment={openConfirmAppointmentModalHandler}
      />
      <SubscriptionPricing
        openBuySubscriptionModal={openBuySubscriptionModalHandler}
      />
      {isAppoinmentModalOpen && (
        <ConfirmAppointmentModal
          closeConfirmAppointment={closeConfirmAppointmentModalHandler}
        />
      )}

      {isBuySubscriptionModalOpen && (
        <BuySubscriptionModal
          closeBuySubscription={closeBuySubscriptionModalModalHandler}
          title="Full Time Pass 1"
          duration="1 month"
          price="100"
        />
      )}
    </React.Fragment>
  );
};

export default SchedulerPage;
