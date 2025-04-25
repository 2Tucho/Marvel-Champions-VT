import React from "react";
import { shallow } from "enzyme";
import KangLifeCounter from "./KangLifeCounter";

describe("KangLifeCounter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<KangLifeCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
