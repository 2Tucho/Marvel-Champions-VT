import React from "react";
import { shallow } from "enzyme";
import TheOnceAndFutureKang from "./TheOnceAndFutureKang";

describe("TheOnceAndFutureKang", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TheOnceAndFutureKang />);
    expect(wrapper).toMatchSnapshot();
  });
});
