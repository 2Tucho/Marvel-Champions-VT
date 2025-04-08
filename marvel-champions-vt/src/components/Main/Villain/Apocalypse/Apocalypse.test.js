import React from "react";
import { shallow } from "enzyme";
import Apocalypse from "./Apocalypse";

describe("Apocalypse", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Apocalypse />);
    expect(wrapper).toMatchSnapshot();
  });
});
