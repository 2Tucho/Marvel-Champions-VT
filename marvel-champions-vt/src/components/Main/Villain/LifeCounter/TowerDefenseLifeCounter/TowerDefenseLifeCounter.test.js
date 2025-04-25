import React from "react";
import { shallow } from "enzyme";
import TowerDefenseLifeCounter from "./TowerDefenseLifeCounter";

describe("TowerDefenseLifeCounter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TowerDefenseLifeCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
