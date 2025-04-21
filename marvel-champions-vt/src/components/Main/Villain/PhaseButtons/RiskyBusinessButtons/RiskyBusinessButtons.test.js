import React from "react";
import { shallow } from "enzyme";
import RiskyBusinessButtons from "./RiskyBusinessButtons";

describe("RiskyBusinessButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<RiskyBusinessButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
