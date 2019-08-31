import React, { useEffect} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {CollectionsOverviewContainer} from "../../components/CollectionsOverview/CollectionsOverview.container";
import {CollectionContainer} from "../Collection/Collection.container";
import {fetchCollectionsStart} from "../../store/shop/shop.actions";

const ShopPage = ({match, fetchCollectionStart}) => {

  useEffect(() => {
      fetchCollectionStart();
  }, [fetchCollectionStart]);

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

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: ()=> dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps
)(ShopPage);
