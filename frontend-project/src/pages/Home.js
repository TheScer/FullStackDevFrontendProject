import React from "react";
import { Modal } from "../components/Modal";
import { Backdrop } from "../components/Backdrop";
import { useState, useEffect } from "react";

export const Home = () => {

  const [id, setID] = useState([]);

  const fetchID = async() => {
    const response = await fetch(
      ""
    )
  }
  const [news, setNews] = useState([]);

  const fetchNews = async() => {
    const response = await fetch(
      "https://news-project-fsd-default-rtdb.europe-west1.firebasedatabase.app/news.json",
    );
    const data = await response.json();

    const fetchedNews = [];

    for (const key in data){
      fetchedNews.push({
        id: key.id,
        by: data[key].by,
        title: data[key].title,
        url: data[key].url
      });
    }
    setNews(fetchedNews);
  };

  useEffect(() => {
    fetchNews();
  }, []);
  

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
