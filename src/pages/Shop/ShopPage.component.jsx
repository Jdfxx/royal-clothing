import React, { useEffect} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {fetchCollectionsStartAsync } from "../../store/shop/shop.actions";
import {CollectionsOverviewContainer} from "../../components/CollectionsOverview/CollectionsOverview.container";
import {CollectionContainer} from "../Collection/Collection.container";

const ShopPage = ({match, fetchCollectionsStartAsync }) => {

  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div>
      <Route
        component={CollectionsOverviewContainer}
        exact
        path={`${match.path}`}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

export default connect(null,
  {fetchCollectionsStartAsync }
)(ShopPage);
