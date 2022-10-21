import React from "react";

export const Modal = (props) => {
  //Modal made in class
  //maybe for our newsapp we can have it be a sign in thing
  return (
    <div className="modal">
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn">Confirm</button>
    </div>
  );
};
