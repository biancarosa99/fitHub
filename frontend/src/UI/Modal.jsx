import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="backdrop">
      <div className="modal">{props.children}</div>
    </div>
  );
};

export default Modal;
