import "./Modal.css";

const Modal = ({ title, firstInput, secondInput }) => {
  return (
    <div>
      <h3>{title}</h3>
      <form action="" className="modal-form">
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
