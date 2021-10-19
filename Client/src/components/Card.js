import "./Card.css"

const Card = ({ fact, src }) => {


  return (
    <div className="card">
      <div className="card-header">
        <img src={src} alt="" />
      </div>
      <div className="card-content">
        <p>{fact}</p>
      </div>
    </div>
  );
};

export default Card;
