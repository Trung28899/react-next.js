import React from "react";

const user = (props) => (
  <div>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    {
      // style has to include jsx
      // curly brackets and back tick is needed too
    }
    <style jsx>{`
      div {
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 20px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default user;
