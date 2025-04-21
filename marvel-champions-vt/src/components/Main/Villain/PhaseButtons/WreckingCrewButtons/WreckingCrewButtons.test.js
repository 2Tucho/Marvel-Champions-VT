import React from "react";
import { shallow } from "enzyme";
import WreckingCrewButtons from "./WreckingCrewButtons";

describe("WreckingCrewButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WreckingCrewButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
