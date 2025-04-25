import React from "react";
import { shallow } from "enzyme";
import RiskyBusinessLifeCounter from "./RiskyBusinessLifeCounter";

describe("RiskyBusinessLifeCounter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RiskyBusinessLifeCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
