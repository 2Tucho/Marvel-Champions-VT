import React from "react";
import { shallow } from "enzyme";
import SinisterSixLifeCounter from "./SinisterSixLifeCounter";

describe("SinisterSixLifeCounter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SinisterSixLifeCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
