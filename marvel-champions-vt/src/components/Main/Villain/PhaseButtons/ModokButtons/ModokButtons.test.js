import React from "react";
import { shallow } from "enzyme";
import ModokButtons from "./ModokButtons";

describe("ModokButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ModokButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
