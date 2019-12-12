import axios from "axios";

export const FETCH_BREWERY_START = "FETCH_BREWERY_START";

export const getBrewery = () => dispatch => {
  dispatch({ type: FETCH_BREWERY_START });
  axios
    .get("https://api.openbrewerydb.org/breweries")
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
