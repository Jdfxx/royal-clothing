import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../CollectionItem/collection-item.component";
import {withRouter} from 'react-router-dom';

const PreviewCollection = ({ title, items, match, history, routeName }) => {
  const itemsContent = items
    .filter((item, index) => index < 4)
    .map(item => <CollectionItem key={item.id} item={item} />);

  return (
    <div className="collection-preview">
      <h1 className="title" onClick={()=> history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
      <div className="preview">{itemsContent}</div>
    </div>
  );
};

export default withRouter(PreviewCollection);
