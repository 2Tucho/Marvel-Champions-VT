import React from "react";
import { shallow } from "enzyme";
import MansionAttack from "./MansionAttack";

describe("MansionAttack", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MansionAttack />);
    expect(wrapper).toMatchSnapshot();
  });
});
