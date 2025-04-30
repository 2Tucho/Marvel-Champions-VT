import React from "react";
import { shallow } from "enzyme";
import SpiralTeleportCounters from "./SpiralTeleportCounters";

describe("SpiralTeleportCounters", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SpiralTeleportCounters />);
    expect(wrapper).toMatchSnapshot();
  });
});
