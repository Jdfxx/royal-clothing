import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const PreviewCollection = ({ title, items }) => {
  const itemsContent = items
    .filter((item, index) => index < 4)
      .map((item) => <CollectionItem key={item.id} item={item}/>);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{itemsContent}</div>
    </div>
  );
};

export default PreviewCollection;
