import React from "react";
import { NewsItem } from "./NewsItem";

export const NewsList = (props) => {
  const newsItems = [
    {
      id: 1,
      by: "muhfukah",
      title: "craaaazy story name",
      url: "https://swurl.com/?q=Paul+Graham+y+combinator",
    },
    {
      id: 2,
      by: "muhfukah2",
      title: "craaaazy story name2",
      url: "tuni.fi",
    },
    {
      id: 3,
      by: "muhfukah3",
      title: "craaaazy story name3",
      url: "https://tamko.fi/tamko-in-english/",
    },
  ];

  return (
    <div>
      <ul>
        {/* testing for now, will change it to props.newsItems or destructure after */}
        {newsItems.map((item) => (
          <NewsItem
            id={item.id}
            by={item.by}
            title={item.title}
            url={item.url}
          />
        ))}
      </ul>
    </div>
  );
};
