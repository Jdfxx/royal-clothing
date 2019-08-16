import React from "react";
import "./ShopPage.styles.scss";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from '../Collection/Collection.component';

const ShopPage = ({ match }) => {
  return (
    <div className={"shop-page"}>
      <Route component={CollectionsOverview} exact path={`${match.path}`} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
