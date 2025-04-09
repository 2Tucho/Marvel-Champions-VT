import React from "react";
import { shallow } from "enzyme";
import TheHood from "./TheHood";

describe("TheHood", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TheHood />);
    expect(wrapper).toMatchSnapshot();
  });
});
