import React from "react";
import { shallow } from "enzyme";
import TheWreckingCrew from "./TheWreckingCrew";

describe("TheWreckingCrew", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TheWreckingCrew />);
    expect(wrapper).toMatchSnapshot();
  });
});
