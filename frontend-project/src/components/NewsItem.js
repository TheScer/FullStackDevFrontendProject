import React from "react";

export const NewsItem = ({ id, by, time, title, url }) => {
  return (
    <div>
      <div>
        <h3>Title: {title}</h3>
        <h3>Author: {by}</h3>
        <h3>Time: {time}</h3>
        <h3>Link: {url}</h3>
        <p>--------------------</p>
      </div>
    </div>
  );
};
