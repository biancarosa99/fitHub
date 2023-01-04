import React, { useState } from "react";
import CancelAppointmentModal from "../components/CancelAppointmentModal";
import UserClasses from "../components/UserClasses";
import UserSubscription from "../components/UserSubscription";

const UserPlansPage = () => {
  const [isCanceClassModalOpen, setIsCancelClassModalOpen] = useState(false);

  const openCancelClassModalHandler = () => {
    setIsCancelClassModalOpen(true);
  };

  const closeCancelClassModalHandler = () => {
    setIsCancelClassModalOpen(false);
  };

  return (
    <React.Fragment>
      <UserSubscription />
      <UserClasses openCancelClassModal={openCancelClassModalHandler} />
      {isCanceClassModalOpen && (
        <CancelAppointmentModal
          closeCancelClassModal={closeCancelClassModalHandler}
        />
      )}
    </React.Fragment>
  );
};

export default UserPlansPage;
