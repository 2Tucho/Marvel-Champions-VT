import React from "react";
import { shallow } from "enzyme";
import Collector2Buttons from "./Collector2Buttons";

describe("Collector2Buttons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Collector2Buttons />);
    expect(wrapper).toMatchSnapshot();
  });
});
