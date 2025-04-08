import React from "react";
import { shallow } from "enzyme";
import TwoFaceThreePhase from "./TwoFaceThreePhase";

describe("TwoFaceThreePhase", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TwoFaceThreePhase />);
    expect(wrapper).toMatchSnapshot();
  });
});
