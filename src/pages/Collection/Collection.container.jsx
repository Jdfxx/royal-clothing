import { compose } from "redux";
import { selectIsCollectionLoaded } from "../../store/shop/shop.selector";
import { connect } from "react-redux";
import CollectionPage from "./Collection.component";
import withSpinner from "../../components/WithSpinner/withSpinner.component";
import {createStructuredSelector} from "reselect";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionLoaded(state)
});
export const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);
