import React from "react";
import { shallow } from "enzyme";
import JuggernautStatusCards from "./JuggernautStatusCards";

describe("JuggernautStatusCards", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<JuggernautStatusCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
