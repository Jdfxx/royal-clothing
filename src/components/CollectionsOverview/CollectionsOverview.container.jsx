import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../store/shop/shop.selector";
import withSpinner from "../../components/WithSpinner/withSpinner.component";
import CollectionsOverview from "./CollectionsOverview.component";

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

export const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);
