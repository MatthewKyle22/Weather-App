import React from "react";
import { render } from "react-dom";

import { Header } from "./components/header";
import { Weather } from "./components/weather";


class App extends React.Component {
  render() {
    return (
      <div className = "container">
        <div className = "textWrapper">
          <div>
              <Header/>
          </div>
          <div>
              <Weather/>
          </div>
        </div>
      </div>
    );
  }
}
render(<App/>, window.document.getElementById('app'));
