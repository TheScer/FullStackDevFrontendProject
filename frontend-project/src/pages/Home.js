import React from "react";
import { Modal } from "../components/Modal";
import { Backdrop } from "../components/Backdrop";
import { useState, useEffect } from "react";
import { NewsList } from "../components/NewsList";

export const Home = () => {

  const fetchID = async() => {

    const del = await fetch("https://news-project-fsd-default-rtdb.europe-west1.firebasedatabase.app/newsid.json")
    const check = await del.json();
    if (check){
      const reset = await fetch("https://news-project-fsd-default-rtdb.europe-west1.firebasedatabase.app/newsid.json",
      {
        method: "DELETE"
      })
    } 
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
  };

  const finalNews = [];

  const fetchNewsBody = async(fetchedNews) => {
    // now have to send fetch request using fetchedNews id and the content should go to some component
    for (var key in fetchedNews) {
      //console.log("i am fetching " , fetchedNews[key].id);
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${fetchedNews[key].id}.json?print=pretty`)
      const data = await response.json();
      //console.log(data)
      finalNews.push(data);
    }
    setNews(finalNews);
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
      <NewsList news={news}></NewsList>
      <button onClick={showModalHandler}>subscribe to our newsletter!</button>
      {showModal && <Modal onCancel={cancelModalHandler} />}
      {showModal ? <Backdrop onClick={cancelModalHandler} /> : null}
    </div>
  );
};
