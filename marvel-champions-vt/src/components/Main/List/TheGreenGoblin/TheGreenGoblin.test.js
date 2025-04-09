import React from "react";
import { shallow } from "enzyme";
import TheGreenGoblin from "./TheGreenGoblin";

describe("TheGreenGoblin", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TheGreenGoblin />);
    expect(wrapper).toMatchSnapshot();
  });
});
