import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      <h3>Loading</h3>
    </div>
  );
};

export default Spinner;
