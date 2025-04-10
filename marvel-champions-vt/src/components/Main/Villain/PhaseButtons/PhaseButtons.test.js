import React from "react";
import { shallow } from "enzyme";
import PhaseButtons from "./PhaseButtons";

describe("PhaseButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PhaseButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
