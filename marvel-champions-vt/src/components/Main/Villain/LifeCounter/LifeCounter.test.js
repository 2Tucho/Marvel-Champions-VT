import React from "react";
import { shallow } from "enzyme";
import LifeCounter from "./LifeCounter";

describe("Life", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LifeCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
