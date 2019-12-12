import React from "react";

import Brewery from "./components/Brewery";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1> Boozy Bopper </h1>
      </header>
      <section>
        <h2> An app for the undecided drinker! </h2>
      </section>
      <Brewery />
    </div>
  );
}

export default App;
