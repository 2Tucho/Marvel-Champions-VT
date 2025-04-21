import React from "react";
import { shallow } from "enzyme";
import KangButtons from "./KangButtons";

describe("KangButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<KangButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
