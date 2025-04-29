import React from "react";
import { shallow } from "enzyme";
import JuggernautMomentumCounters from "./JuggernautMomentumCounters";

describe("JuggernautMomentumCounters", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<JuggernautMomentumCounters />);
    expect(wrapper).toMatchSnapshot();
  });
});
