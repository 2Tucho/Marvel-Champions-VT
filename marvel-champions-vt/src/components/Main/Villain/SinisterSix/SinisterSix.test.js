import React from "react";
import { shallow } from "enzyme";
import SinisterSix from "./SinisterSix";

describe("SinisterSix", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SinisterSix />);
    expect(wrapper).toMatchSnapshot();
  });
});
