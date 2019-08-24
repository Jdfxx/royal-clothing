import React, { useEffect, useState } from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../Collection/Collection.component";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { setCollections } from "../../store/shop/shop.actions";
import withSpinner from "../../components/WithSpinner/withSpinner.component";


const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ match, setCollections }) => {
  const [isLoading, setloading] = useState(true);

  let unsubscribeFromSnapshot = null;

  useEffect(() => {
    setloading(true);
    const collectionRef = firestore.collection("collection");
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = await convertCollectionSnapshotToMap(snapshot);
      setCollections(collectionsMap);
    });
      setloading(false);
    return unsubscribeFromSnapshot;
  }, []);

  return (
    <div>
        <Route render={(props)=><CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} exact path={`${match.path}`} />
      <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={isLoading} {...props}/>} />
    </div>
  );
};

export default connect(
  null,
  { setCollections }
)(ShopPage);
