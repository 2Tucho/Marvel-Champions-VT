import React from "react";
import { shallow } from "enzyme";
import MansionAttackVillainCounter from "./MansionAttackVillainCounter";

describe("MansionAttackVillainCounter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MansionAttackVillainCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
