import React from "react";
import { shallow } from "enzyme";
import StatusTokens from "./StatusTokens";

describe("StatusTokens", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StatusTokens />);
    expect(wrapper).toMatchSnapshot();
  });
});
