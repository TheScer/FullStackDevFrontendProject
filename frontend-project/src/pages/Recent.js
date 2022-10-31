import { NewsList } from "../components/NewsList";
import {useState, useEffect, React} from "react";

export const Recent = () => {

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
      "https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty"
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

  return (
    <div>
      <h2>Recent</h2>
      <NewsList  news={news} ></NewsList>
    </div>
  );
};
