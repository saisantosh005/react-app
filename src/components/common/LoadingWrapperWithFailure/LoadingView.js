import React from "react";

import Loader from "../Icons/Loader";

import { LoadingViewContainer } from "./styledComponents";

class LoadingView extends React.Component {
  render() {
    const {fill}=this.props;
    return (
      <LoadingViewContainer>
        <Loader fill={fill}/>
      </LoadingViewContainer>
    );
  }
}

export default LoadingView;
