import React from "react";
import { shallow } from "enzyme";
import AgentsOfShield from "./AgentsOfShield";

describe("AgentsOfShield", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AgentsOfShield />);
    expect(wrapper).toMatchSnapshot();
  });
});
