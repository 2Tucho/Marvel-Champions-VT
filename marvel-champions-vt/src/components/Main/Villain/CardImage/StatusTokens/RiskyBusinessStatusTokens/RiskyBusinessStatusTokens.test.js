import React from "react";
import { shallow } from "enzyme";
import RiskyBusinessStatusTokens from "./RiskyBusinessStatusTokens";

describe("RiskyBusinessStatusTokens", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RiskyBusinessStatusTokens />);
    expect(wrapper).toMatchSnapshot();
  });
});
