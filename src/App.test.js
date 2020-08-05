import React from "react";
import App from "./App";
import { shallow, mount, render } from "enzyme";
import PersonList from "./PersonList";

describe("App", () => {
  let appWrapper;

  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it("renders without crashing", () => {});

  it("renders a person list", () => {
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  });

  it("has state", () => {
    const appState = appWrapper.state();
    expect(appState).not.toBeNull();
  });

  it("has a people property on state", () => {
    const appState = appWrapper.state();
    expect(appState.people).toBeDefined();
  });

  it("passed people property of state to personList as prop", () => {
    const personList = appWrapper.find(PersonList);
    expect(personList.props().people).toEqual(appWrapper.state().people);
  });
});
