import React from "react";

import { connect } from "react-redux";
import { getBrewery } from "../actions";

import Loader from "react-loader-spinner";

const Brewery = props => {
  return (
    <div className="container">
      <div className="brewery">
        <button onClick={() => props.getBrewery()}>
          {!props.brewery ? "Click Me" : "Find Another"}
        </button>
        {!props.brewery && !props.isFetching && (
          <p>
            Click the button above to find out where you are drinking tonight!
          </p>
        )}
        {props.isFetching && (
          <Loader type="BallTriangle" color="blue" height={80} width={80} />
        )}
        {props.brewery && (
          <div>
            <h2> {props.brewery.name} </h2>
            <p> TYPE: {props.brewery.brewery_type} </p>
            <p>{props.brewery.street}</p>
            <p>{props.brewery.city}</p>
            <p>{props.brewery.state}</p>
            <a href={props.brewery.website_url}> Visit {props.brewery.name} </a>
          </div>
        )}
      </div>
    </div>
  );
};

const mapPropsToState = state => {
  console.log(state);
  return {
    brewery: state.brewery,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapPropsToState, { getBrewery })(Brewery);
