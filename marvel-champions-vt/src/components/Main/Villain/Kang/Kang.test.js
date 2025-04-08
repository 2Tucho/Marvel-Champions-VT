import React from "react";
import { shallow } from "enzyme";
import Kang from "./Kang";

describe("Kang", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Kang />);
    expect(wrapper).toMatchSnapshot();
  });
});
