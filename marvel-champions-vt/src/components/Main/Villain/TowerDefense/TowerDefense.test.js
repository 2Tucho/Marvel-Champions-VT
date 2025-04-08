import React from "react";
import { shallow } from "enzyme";
import TowerDefense from "./TowerDefense";

describe("TowerDefense", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TowerDefense />);
    expect(wrapper).toMatchSnapshot();
  });
});
