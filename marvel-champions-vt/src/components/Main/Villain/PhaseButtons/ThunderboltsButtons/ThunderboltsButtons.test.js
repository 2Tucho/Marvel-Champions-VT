import React from "react";
import { shallow } from "enzyme";
import ThunderboltsButtons from "./ThunderboltsButtons";

describe("ThunderboltsButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ThunderboltsButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
