import React from "react";
import "./ShopPage.styles.scss";
import PreviewCollection from "../../components/PreviewCollection/preview-collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../store/collections/collections.selector";

const ShopPage = ({ collections }) => {
  return (
    <div className={"shop-page"}>
      {collections.map(collection => (
        <PreviewCollection
          key={collection.id}
          title={collection.title}
          items={collection.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
