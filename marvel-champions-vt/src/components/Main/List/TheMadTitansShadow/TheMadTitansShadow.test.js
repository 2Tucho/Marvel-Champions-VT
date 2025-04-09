import React from "react";
import { shallow } from "enzyme";
import TheMadTitansShadow from "./TheMadTitansShadow";

describe("TheMadTitansShadow", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TheMadTitansShadow />);
    expect(wrapper).toMatchSnapshot();
  });
});
