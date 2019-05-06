import React, { Component } from "react";
import "./App.css";

import ExchangedCurrencyHOC from "./Components/CurrencyConverterHOC";
import ExchangedCurrencyRender from "./Components/CurrencyConverterHOC";


class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <ExchangedCurrencyHOC />
        <h2>Render Props</h2>
        <ExchangedCurrencyRender render={() => {}} />
      </>
    );
  }
}

export default App;
