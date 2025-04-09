import React from "react";
import { shallow } from "enzyme";
import CoreSet from "./CoreSet";

describe("CoreSet", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CoreSet />);
    expect(wrapper).toMatchSnapshot();
  });
});
