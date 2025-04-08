import React from "react";
import { shallow } from "enzyme";
import WreckingCrew from "./WreckingCrew";

describe("WreckingCrew", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WreckingCrew />);
    expect(wrapper).toMatchSnapshot();
  });
});
