import React from "react";
import { shallow } from "enzyme";
import MorlockSiege from "./MorlockSiege";

describe("MorlockSiege", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MorlockSiege />);
    expect(wrapper).toMatchSnapshot();
  });
});
