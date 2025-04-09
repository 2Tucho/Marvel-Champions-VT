import React from "react";
import { shallow } from "enzyme";
import MojoMania from "./MojoMania";

describe("MojoMania", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MojoMania />);
    expect(wrapper).toMatchSnapshot();
  });
});
