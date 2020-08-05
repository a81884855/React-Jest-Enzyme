import React from "react";
import { shallow } from "enzyme";
import Color from "./Color";

describe("Color", () => {
  it("button changes color of box", () => {
    const app = shallow(<Color />);
    expect(app.find(".box").length).toEqual(1);
    const button = app.find("button").last();
    // pass mocked event object
    button.simulate("click", {
      target: {
        value: () => button.props().value,
        // button.props.value;
      },
    });
    expect(app.find(".box.red").length).toEqual(1);
  });
});
