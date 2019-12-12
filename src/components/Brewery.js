import React from "react";
import { connect } from "react-redux";
import { getBrewery } from "../actions";

const Brewery = props => {
  return (
    <div>
      <button onClick={() => props.getBrewery()}>
        Press to pick a random brewery
      </button>
      <h2>Brewery Name</h2>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    brewery: state.brewery,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapPropsToState, { getBrewery })(Brewery);
