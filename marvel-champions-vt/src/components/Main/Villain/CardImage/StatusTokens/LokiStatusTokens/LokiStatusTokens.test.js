import React from "react";
import { shallow } from "enzyme";
import LokiStatusTokens from "./LokiStatusTokens";

describe("LokiStatusTokens", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LokiStatusTokens />);
    expect(wrapper).toMatchSnapshot();
  });
});
