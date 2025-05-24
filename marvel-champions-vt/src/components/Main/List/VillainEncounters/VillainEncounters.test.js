import React from "react";
import { shallow } from "enzyme";
import VillainEncounters from "./VillainEncounters";

describe("VillainEncounters", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<VillainEncounters />);
    expect(wrapper).toMatchSnapshot();
  });
});
