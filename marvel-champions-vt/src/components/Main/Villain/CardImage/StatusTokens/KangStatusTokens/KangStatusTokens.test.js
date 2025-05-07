import React from "react";
import { shallow } from "enzyme";
import KangStatusTokens from "./KangStatusTokens";

describe("KangStatusTokens", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<KangStatusTokens />);
    expect(wrapper).toMatchSnapshot();
  });
});
