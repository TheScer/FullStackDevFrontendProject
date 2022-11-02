import React from "react";

export const Modal = (props) => {
  return (
    <div className="modal">
      <input placeholder="email here!"></input>
      <input placeholder="name"></input>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn">Confirm</button>
    </div>
  );
};
