import React from "react";
import { shallow } from "enzyme";
import VillainNav from "./VillainNav";

describe("VillainNav", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<VillainNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
