import React from "react";
import { shallow } from "enzyme";
import TheRiseOfRedSkull from "./TheRiseOfRedSkull";

describe("TheRiseOfRedSkull", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TheRiseOfRedSkull />);
    expect(wrapper).toMatchSnapshot();
  });
});
