import React from "react";
import { shallow } from "enzyme";
import SpiralButtons from "./SpiralButtons";

describe("SpiralButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SpiralButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
