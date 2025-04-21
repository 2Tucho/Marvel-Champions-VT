import React from "react";
import { shallow } from "enzyme";
import MorlockSiegeButtons from "./MorlockSiegeButtons";

describe("MorlockSiegeButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MorlockSiegeButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
