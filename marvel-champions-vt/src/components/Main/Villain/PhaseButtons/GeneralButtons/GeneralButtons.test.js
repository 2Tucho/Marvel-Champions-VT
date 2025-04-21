import React from "react";
import { shallow } from "enzyme";
import GeneralButtons from "./GeneralButtons";

describe("GeneralButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GeneralButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
