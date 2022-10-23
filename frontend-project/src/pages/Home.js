import React from "react";
import { Modal } from "../components/Modal";
import { Backdrop } from "../components/Backdrop";
import { useState, useEffect } from "react";

export const Home = () => {
  
  const [id, setID] = useState([]);

  const fetchID = async() => {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty"
    )
    const data = await response.json();
    const fetchedID = [];
   //console.log(data);
    for (const key in data){
      fetchedID.push({
        id: data[key]
      });
    }
    setNewsID(fetchedID);
  }
  

  const setNewsID = async(id) => {
    const response = await fetch(
      "https://news-project-fsd-default-rtdb.europe-west1.firebasedatabase.app/newsid.json",
      {
        method: "POST",
        body: JSON.stringify(id),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //const data = await response.json();
    //console.log(data);
    fetchNewsID();
  }

  const [news, setNews] = useState([]);

  const fetchNewsID = async () => {


    const response = await fetch(
      "https://news-project-fsd-default-rtdb.europe-west1.firebasedatabase.app/newsid.json"
    );
    const data = await response.json();
    //console.log(data);

    const fetchedNews = [];

    for (const key in data) {
      const subdata = data[key];
      if (fetchedNews.length < 20) {
        for (var i=0; i<20; i++){
          fetchedNews.push(subdata[i])
        }
      }      
    }

    fetchNewsBody(fetchedNews);
    //console.log(fetchedNews);
    // figure out how to slice data and get top 20 news id and then send request to api to load news and then oscar does the rest

    /*for (const key in data) {
      fetchedNews.push({
        id: key.id,
        by: data[key].by,
        title: data[key].title,
        url: data[key].url,
      });
    }*/
    //setNews(fetchedNews);
  };

  const fetchNewsBody = async(fetchedNews) => {
    // now have to send fetch request using fetchedNews id and the content should go to some component
  }

  useEffect(() => {
    fetchID();
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
