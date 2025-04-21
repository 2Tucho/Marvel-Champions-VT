import React from "react";
import { shallow } from "enzyme";
import MagogButtons from "./MagogButtons";

describe("MagogButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MagogButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
