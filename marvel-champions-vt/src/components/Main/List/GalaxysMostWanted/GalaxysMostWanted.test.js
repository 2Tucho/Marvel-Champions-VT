import React from "react";
import { shallow } from "enzyme";
import GalaxysMostWanted from "./GalaxysMostWanted";

describe("GalaxysMostWanted", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GalaxysMostWanted />);
    expect(wrapper).toMatchSnapshot();
  });
});
