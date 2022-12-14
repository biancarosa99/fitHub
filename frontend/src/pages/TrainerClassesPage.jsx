import React, { useEffect, useRef, useState } from "react";
import AddFitnessClass from "../components/AddFitnessClass";
import TrainerFutureClasses from "../components/TrainerFutureClasses";

const TrainerClassesPage = () => {
  const [isAddClassVisible, setIsAddClassVisible] = useState(false);
  const ref = useRef("");

  useEffect(() => {
    const div = ref.current;
    if (div) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isAddClassVisible]);

  const handleClick = () => {
    setIsAddClassVisible((prev) => !prev);
  };

  return (
    <React.Fragment>
      <TrainerFutureClasses
        toggleAddClass={() => setIsAddClassVisible((prev) => !prev)}
        handleClick={handleClick}
      />
      {isAddClassVisible && <AddFitnessClass ref={ref} />}
    </React.Fragment>
  );
};

export default TrainerClassesPage;
