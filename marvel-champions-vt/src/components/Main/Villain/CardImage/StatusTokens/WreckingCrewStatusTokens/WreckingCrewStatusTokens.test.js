import React from "react";
import { shallow } from "enzyme";
import WreckingCrewStatusTokens from "./WreckingCrewStatusTokens";

describe("WreckingCrewStatusTokens", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WreckingCrewStatusTokens />);
    expect(wrapper).toMatchSnapshot();
  });
});
