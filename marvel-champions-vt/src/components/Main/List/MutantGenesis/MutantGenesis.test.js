import React from "react";
import { shallow } from "enzyme";
import MutantGenesis from "./MutantGenesis";

describe("MutantGenesis", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MutantGenesis />);
    expect(wrapper).toMatchSnapshot();
  });
});
