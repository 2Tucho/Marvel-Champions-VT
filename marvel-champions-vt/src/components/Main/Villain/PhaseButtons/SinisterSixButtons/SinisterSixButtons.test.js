import React from "react";
import { shallow } from "enzyme";
import SinisterSixButtons from "./SinisterSixButtons";

describe("SinisterSixButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SinisterSixButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
