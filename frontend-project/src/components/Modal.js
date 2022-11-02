import React from "react";

export const Modal = (props) => {
  return (
    <div className="modal">
      <div>
        <input className="modal-in" placeholder="email here!"></input>
        <input className="modal-in" placeholder="name"></input>
      </div>
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn">Confirm</button>
    </div>
  );
};
