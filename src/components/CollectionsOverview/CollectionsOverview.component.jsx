import React from "react";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../PreviewCollection/preview-collection.component";
import { selectCollections } from "../../store/shop/shop.selector";
import { connect } from "react-redux";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
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

export default connect(mapStateToProps)(CollectionsOverview);
