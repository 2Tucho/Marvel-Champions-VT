import React from "react";
import { shallow } from "enzyme";
import FourHorsemenLifeCounter from "./FourHorsemenLifeCounter";

describe("FourHorsemenLifeCounter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FourHorsemenLifeCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
