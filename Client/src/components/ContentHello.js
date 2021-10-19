import React from "react";

const ContentHello = () => {
  const onClick = () => {
    fetch("/api").then((res) => res.json()).then(data => console.log(data));
  };

  return (
    <div>
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis
        provident et laboriosam expedita libero, eveniet alias aperiam tempore
        nam.
      </p>
      <button onClick={onClick}>Server testing</button>
    </div>
  );
};

export default ContentHello;
