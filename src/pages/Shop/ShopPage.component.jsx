import React , {useEffect} from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";
import { Route } from "react-router-dom";
import CollectionPage from '../Collection/Collection.component';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCollections} from "../../store/shop/shop.actions";

const ShopPage = ({ match, setCollections }) => {

    let unsubscribeFromSnapshot = null;

    useEffect(()=>{
        const collectionRef = firestore.collection('collection');
        unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
           const collectionsMap =  await convertCollectionSnapshotToMap(snapshot);
           setCollections(collectionsMap);
        });

        return unsubscribeFromSnapshot;
    }, []);

  return (
    <div>
      <Route component={CollectionsOverview} exact path={`${match.path}`} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default connect(null, {setCollections})(ShopPage );