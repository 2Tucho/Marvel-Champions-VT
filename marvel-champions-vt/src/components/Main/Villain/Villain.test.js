import React from "react";
import { shallow } from "enzyme";
import Villain from "./Villain";

describe("Villain", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Villain />);
    expect(wrapper).toMatchSnapshot();
  });
});
