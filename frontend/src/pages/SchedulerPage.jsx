import React, { useContext, useState } from "react";
import BuySubscriptionModal from "../components/BuySubscriptionModal";
import ConfirmAppointmentModal from "../components/ConfirmAppointmentModal";
import FitnessScheduler from "../components/FitnessScheduler";
import SubscriptionPricing from "../components/SubscriptionPricing";
import AuthContext from "../context/AuthContext";
import SnackBar from "../UI/SnackBar";

const SchedulerPage = () => {
  const { user } = useContext(AuthContext);

  const [isAppoinmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isBuySubscriptionModalOpen, setIsBuySubscriptionModalOpen] =
    useState(false);
  const [openUserNotLoggedInSnackbar, setOpenUserNotLoggedInSnackbar] =
    useState(false);

  const [appointmentDetails, setAppointmentDetails] = useState({});

  const userNotLoggedInHandler = () => {
    setOpenUserNotLoggedInSnackbar(true);
    setTimeout(() => setOpenUserNotLoggedInSnackbar(false), 6000);
  };

  const openConfirmAppointmentModalHandler = (
    className,
    classLocation,
    classDate,
    classId
  ) => {
    if (user) {
      setIsAppointmentModalOpen(true);
      const appointmentDetails = {
        className,
        classLocation,
        classDate,
        classId,
      };
      setAppointmentDetails(appointmentDetails);
    } else {
      userNotLoggedInHandler();
    }
  };

  const closeConfirmAppointmentModalHandler = () => {
    setIsAppointmentModalOpen(false);
    console.log("modal opened");
  };

  const openBuySubscriptionModalHandler = () => {
    if (user) {
      setIsBuySubscriptionModalOpen(true);
      console.log("modal opened");
    } else {
      userNotLoggedInHandler();
    }
  };

  const closeBuySubscriptionModalModalHandler = () => {
    setIsBuySubscriptionModalOpen(false);
    console.log("modal opened");
  };

  const closeSnackbarHandler = () => {
    setOpenUserNotLoggedInSnackbar(false);
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
          className={appointmentDetails.className}
          classLocation={appointmentDetails.classLocation}
          classDate={appointmentDetails.classDate}
          classId={appointmentDetails.classId}
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
      <SnackBar
        open={openUserNotLoggedInSnackbar}
        closeSnackbarHandler={closeSnackbarHandler}
        message="You can't perform this action if not logged in"
        severity="error"
      />
    </React.Fragment>
  );
};

export default SchedulerPage;
