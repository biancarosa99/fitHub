import React, { useState } from "react";
import ConfirmAppointmentModal from "../components/ConfirmAppointmentModal";
import FitnessScheduler from "../components/FitnessScheduler";
import SubscriptionPricing from "../components/SubscriptionPricing";

const SchedulerPage = () => {
  const [isAppoinmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openConfirmAppointmentModalHandler = () => {
    setIsAppointmentModalOpen(true);
    console.log("modal opened");
  };

  const closeConfirmAppointmentModalHandler = () => {
    setIsAppointmentModalOpen(false);
    console.log("modal opened");
  };
  return (
    <React.Fragment>
      <FitnessScheduler
        openConfirmAppointment={openConfirmAppointmentModalHandler}
      />
      <SubscriptionPricing />
      {isAppoinmentModalOpen && (
        <ConfirmAppointmentModal
          closeConfirmAppointment={closeConfirmAppointmentModalHandler}
        />
      )}
    </React.Fragment>
  );
};

export default SchedulerPage;
