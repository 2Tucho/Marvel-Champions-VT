import React from "react";
import { shallow } from "enzyme";
import TowerDefenseButtons from "./TowerDefenseButtons";

describe("TowerDefenseButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TowerDefenseButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
