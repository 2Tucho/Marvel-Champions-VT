import React from "react";
import { shallow } from "enzyme";
import CardImage from "./CardImage";

describe("CardImage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
