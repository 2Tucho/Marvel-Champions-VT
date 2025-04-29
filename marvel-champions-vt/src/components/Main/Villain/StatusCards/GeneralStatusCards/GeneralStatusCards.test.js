import React from "react";
import { shallow } from "enzyme";
import GeneralStatusCards from "./GeneralStatusCards";

describe("GeneralStatusCards", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GeneralStatusCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
