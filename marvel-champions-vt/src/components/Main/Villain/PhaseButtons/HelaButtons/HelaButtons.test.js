import React from "react";
import { shallow } from "enzyme";
import HelaButtons from "./HelaButtons";

describe("HelaButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HelaButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
