import React from "react";
import { shallow } from "enzyme";
import NextEvolution from "./NextEvolution";

describe("NextEvolution", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NextEvolution />);
    expect(wrapper).toMatchSnapshot();
  });
});
