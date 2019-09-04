import React, {memo} from "react";
import "./menu-item.styles.scss";
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
  return (
    <div className={`menu-item ${size}`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
  );
};

export default withRouter(memo(MenuItem));
