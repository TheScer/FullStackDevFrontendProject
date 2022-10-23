import React from "react";
import { Link } from "react-router-dom";
import "./NewsItem.css";

export const NewsItem = ({ id, by, time, title, url }) => {
  return (
    <div>
      <div className="listItem">
        <h3 className="title">Title: {title}</h3>
        <h3 className="description">Author: {by}</h3>
        <h3 className="date">Time: {time}</h3>
        <Link to={url}>Link: {url}</Link>
      </div>
    </div>
  );
};
