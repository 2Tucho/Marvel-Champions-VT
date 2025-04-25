import React from "react";
import { shallow } from "enzyme";
import WreckingCrewLifeCounter from "./WreckingCrewLifeCounter";

describe("WreckingCrewLifeCounter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WreckingCrewLifeCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
