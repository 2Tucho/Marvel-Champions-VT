import React from "react";
import { shallow } from "enzyme";
import TwoFaceOnePhase from "./TwoFaceOnePhase";

describe("TwoFaceOnePhase", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TwoFaceOnePhase />);
    expect(wrapper).toMatchSnapshot();
  });
});
