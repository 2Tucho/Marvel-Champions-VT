import React from "react";
import { shallow } from "enzyme";
import SpiralStatusCards from "./SpiralStatusCards";

describe("SpiralStatusCards", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SpiralStatusCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
