import { useState } from "react";
import "./Modal.css";

const Modal = ({ title, firstInput, secondInput }) => {
  const [visible, setVisible] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="modal-container"
      style={{ display: visible ? "block" : "none" }}
    >
      {" "}
      <div className="modal-header">
        <h3>{title}</h3>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          x
        </button>
      </div>
      <form className="modal-form" onSubmit={onSubmit}>
        <label htmlFor="">{firstInput}</label>
        <input type="text" />
        <label htmlFor="">{secondInput}</label>
        <input type="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Modal;
