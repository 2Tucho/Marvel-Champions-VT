import React from "react";
import { shallow } from "enzyme";
import FourHorsemen from "./FourHorsemen";

describe("FourHorsemen", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FourHorsemen />);
    expect(wrapper).toMatchSnapshot();
  });
});
