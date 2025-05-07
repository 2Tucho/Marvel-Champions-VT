import React from "react";
import { shallow } from "enzyme";
import SinisterSixStatusTokens from "./SinisterSixStatusTokens";

describe("SinisterSixStatusTokens", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SinisterSixStatusTokens />);
    expect(wrapper).toMatchSnapshot();
  });
});
