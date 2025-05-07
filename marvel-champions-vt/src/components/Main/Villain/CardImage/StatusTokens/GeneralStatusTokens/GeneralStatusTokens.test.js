import React from "react";
import { shallow } from "enzyme";
import GeneralStatusTokens from "./GeneralStatusTokens";

describe("GeneralStatusTokens", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GeneralStatusTokens />);
    expect(wrapper).toMatchSnapshot();
  });
});
