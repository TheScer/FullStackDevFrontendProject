import React from "react";
import { NewsItem } from "./NewsItem";

export const NewsList = (props) => {
  return (
    <div>
      <ul>
        {props.news.map((item) => (
          <NewsItem
            by={item.by}
            id={item.id}
            title={item.title}
            url={item.url}
            time={item.time}
          />
        ))}
      </ul>
    </div>
  );
};
