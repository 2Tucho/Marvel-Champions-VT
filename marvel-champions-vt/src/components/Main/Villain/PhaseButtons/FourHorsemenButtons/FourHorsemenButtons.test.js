import React from "react";
import { shallow } from "enzyme";
import FourHorsemenButtons from "./FourHorsemenButtons";

describe("FourHorsemenButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FourHorsemenButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
