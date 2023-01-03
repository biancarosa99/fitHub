import React, { useEffect, useRef, useState } from "react";
import AddFitnessClass from "../components/AddFitnessClass";
import TrainerFutureClasses from "../components/TrainerFutureClasses";
import ViewParticipantsList from "../components/ViewParticipantsList";

const TrainerClassesPage = () => {
  const [isAddClassVisible, setIsAddClassVisible] = useState(false);
  const [isViewParticipantsModalOpen, setIsViewParticipantsModalOpen] =
    useState(false);

  const ref = useRef("");

  useEffect(() => {
    const div = ref.current;
    if (div) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isAddClassVisible]);

  const handleToggleAddClass = () => {
    setIsAddClassVisible((prev) => !prev);
  };

  return (
    <React.Fragment>
      <TrainerFutureClasses
        toggleAddClass={handleToggleAddClass}
        openViewParticipantsList={() => setIsViewParticipantsModalOpen(true)}
      />
      {isAddClassVisible && <AddFitnessClass ref={ref} />}
      {isViewParticipantsModalOpen && (
        <ViewParticipantsList
          closeViewParticipantsList={() =>
            setIsViewParticipantsModalOpen(false)
          }
        />
      )}
    </React.Fragment>
  );
};

export default TrainerClassesPage;
