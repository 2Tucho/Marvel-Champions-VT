import React from "react";
import { shallow } from "enzyme";
import TwoFaceTwoPhase from "./TwoFaceTwoPhase";

describe("TwoFaceTwoPhase", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TwoFaceTwoPhase />);
    expect(wrapper).toMatchSnapshot();
  });
});
