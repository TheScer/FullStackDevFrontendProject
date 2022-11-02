import React from "react";
import { Link } from "react-router-dom";
import "./NewsItem.css";

export const NewsItem = ({ id, by, time, title, url }) => {
  return (
    <div>
      <div className="listItem">
        <h4 className="title">Title: {title}</h4>
        <h4 className="description">Author: {by}</h4>
        <h4 className="date">Time: {Date(time)}</h4>
        <a className="link" target="_blank" href={url}>
          <button className="btn">Click here for link</button>
        </a>
      </div>
    </div>
  );
};
