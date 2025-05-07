import React from "react";
import { shallow } from "enzyme";
import TowerDefenseStatusTokens from "./TowerDefenseStatusTokens";

describe("TowerDefenseStatusTokens", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TowerDefenseStatusTokens />);
    expect(wrapper).toMatchSnapshot();
  });
});
