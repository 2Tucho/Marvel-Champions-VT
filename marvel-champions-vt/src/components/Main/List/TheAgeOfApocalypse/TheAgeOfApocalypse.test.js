import React from "react";
import { shallow } from "enzyme";
import TheAgeOfApocalypse from "./TheAgeOfApocalypse";

describe("TheAgeOfApocalypse", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TheAgeOfApocalypse />);
    expect(wrapper).toMatchSnapshot();
  });
});
