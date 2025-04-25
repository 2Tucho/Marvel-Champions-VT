import React from "react";
import { shallow } from "enzyme";
import GeneralLifeCounter from "./GeneralLifeCounter";

describe("GeneralLifeCounter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GeneralLifeCounter />);
    expect(wrapper).toMatchSnapshot();
  });
});
