import React from "react";
import { shallow } from "enzyme";
import OnTheRunButtons from "./OnTheRunButtons";

describe("OnTheRunButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OnTheRunButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
