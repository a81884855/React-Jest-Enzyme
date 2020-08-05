import React, { Component } from "react";
import "./App.css";
import PersonList from "./PersonList";
import Color from "./Color";
class App extends Component {
  state = { people: [{ firstName: "Alan", lastName: "Truing" }] };
  render() {
    return (
      <div className="App">
        <PersonList people={this.state.people} />
        <Color />
      </div>
    );
  }
}

export default App;
