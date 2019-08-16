import React from "react";
import "./ShopPage.styles.scss";
import PreviewCollection from "../../components/PreviewCollection/preview-collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../store/shop/shop.selector";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";

const ShopPage = () => {
  return (
    <div className={"shop-page"}>
      <CollectionsOverview />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
