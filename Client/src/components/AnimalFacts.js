import { useState } from "react";
import "./AnimalFacts.css";

import Card from "./Card";
import Spinner from "./Spinner";

const ContentContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [src, setSrc] = useState("");
  const [fact, setFact] = useState("");

  const generateCatFact = () => {
    setIsLoading(true);

    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => setFact(data.fact));

    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        setSrc(data[0].url);
        setIsLoading(false);
      });
  };

  const generateDogFact = () => {
    setIsLoading(true);

    fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1")
      .then((response) => response.json())
      .then((data) => setFact(data[0].fact));

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setSrc(data.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="fact-container">
      <div className="btn-container">
        <button className="dog-btn" onClick={generateDogFact}>
          Dog
        </button>
        <button className="cat-btn" onClick={generateCatFact}>
          Cat
        </button>
      </div>
      <div className="card-container">
        {isLoading ? <Spinner /> : <Card src={src} fact={fact} />}
      </div>
    </div>
  );
};

export default ContentContainer;
