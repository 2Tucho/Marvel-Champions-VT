import React from "react";
import { shallow } from "enzyme";
import EnSabahNur from "./EnSabahNur";

describe("EnSabahNur", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EnSabahNur />);
    expect(wrapper).toMatchSnapshot();
  });
});
