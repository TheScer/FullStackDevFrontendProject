import React from "react";
import { Modal } from "../components/Modal";
import { Backdrop } from "../components/Backdrop";
import { useState } from "react";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={showModalHandler}>subscribe to our newsletter!</button>
      {showModal && <Modal onCancel={cancelModalHandler} />}
      {showModal ? <Backdrop onClick={cancelModalHandler} /> : null}
    </div>
  );
};
