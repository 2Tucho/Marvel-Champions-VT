import React from "react";
import { shallow } from "enzyme";
import BatrocButtons from "./BatrocButtons";

describe("BatrocButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BatrocButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
