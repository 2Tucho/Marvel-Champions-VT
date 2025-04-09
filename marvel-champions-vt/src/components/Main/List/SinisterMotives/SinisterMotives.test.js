import React from "react";
import { shallow } from "enzyme";
import SinisterMotives from "./SinisterMotives";

describe("SinisterMotives", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SinisterMotives />);
    expect(wrapper).toMatchSnapshot();
  });
});
