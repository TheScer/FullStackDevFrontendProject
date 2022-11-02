import { Link } from "react-router-dom";
import { Modal } from "../components/Modal";
import { Backdrop } from "./Backdrop";
import { useState } from "react";

import "./Navbar.css";

export const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  };

  return (
    <header className="header">
      <h2>HackerNews! Stay Informed!</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/jobhunt">Job Hunt</Link>
          </li>
          <li>
            <Link to="/about">AboutUs!</Link>
          </li>
          <li>
            <button onClick={showModalHandler}>sign up to newsletter</button>
          </li>
        </ul>
      </nav>
      {showModal && <Modal onCancel={cancelModalHandler} />}
      {showModal ? <Backdrop onClick={cancelModalHandler} /> : null}
    </header>
  );
};
