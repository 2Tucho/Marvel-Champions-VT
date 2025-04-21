import React from "react";
import { shallow } from "enzyme";
import BaronZemoButtons from "./BaronZemoButtons";

describe("BaronZemoButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BaronZemoButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
