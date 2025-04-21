import React from "react";
import { shallow } from "enzyme";
import ApocalypseButtons from "./ApocalypseButtons";

describe("ApocalypseButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ApocalypseButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
