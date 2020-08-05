import React from "react";
import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("PersonList", () => {
  let personListWrapper;
  beforeAll(() => {
    personListWrapper = shallow(<PersonList />);
  });

  it("render ul element", () => {
    const peopleListUls = personListWrapper.find("ul");
    expect(peopleListUls).toHaveLength(1);
  });

  it("render no li elements when no people exist", () => {
    const people = [];
    personListWrapper = shallow(<PersonList people={people} />);

    const peopleListItems = personListWrapper.find("li");
    expect(peopleListItems).toHaveLength(0);
  });

  it("render one li elements when one people exist", () => {
    const people = [{ firstName: "Alan", lastName: "Truing" }];
    personListWrapper = shallow(<PersonList people={people} />);

    const peopleListItems = personListWrapper.find("li");
    expect(peopleListItems).toHaveLength(1);
  });

  it("render all li elements when more than one people exist", () => {
    const people = [
      { firstName: "Alan", lastName: "Truing" },
      { firstName: "gary", lastName: "guan" },
    ];
    personListWrapper = shallow(<PersonList people={people} />);

    const peopleListItems = personListWrapper.find("li");
    expect(peopleListItems).toHaveLength(2);
  });

  it("renders the first and last name of a person", () => {
    const people = [{ firstName: "Jane", lastName: "Curtin" }];
    personListWrapper = shallow(<PersonList people={people} />);

    expect(personListWrapper.find("li").text()).toContain(people[0].firstName);
    expect(personListWrapper.find("li").text()).toContain(people[0].lastName);
  });
});
