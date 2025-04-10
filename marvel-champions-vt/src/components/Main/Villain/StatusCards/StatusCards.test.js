import React from "react";
import { shallow } from "enzyme";
import StatusCards from "./StatusCards";

describe("StatusCards", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StatusCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
