import React from "react";
import { shallow } from "enzyme";
import EnSabahNurButtons from "./EnSabahNurButtons";

describe("EnSabahNurButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EnSabahNurButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
