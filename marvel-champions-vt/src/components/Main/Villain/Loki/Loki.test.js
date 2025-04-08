import React from "react";
import { shallow } from "enzyme";
import Loki from "./Loki";

describe("Loki", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Loki />);
    expect(wrapper).toMatchSnapshot();
  });
});
