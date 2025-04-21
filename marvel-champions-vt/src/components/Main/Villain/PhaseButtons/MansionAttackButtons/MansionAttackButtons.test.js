import React from "react";
import { shallow } from "enzyme";
import MansionAttackButtons from "./MansionAttackButtons";

describe("MansionAttackButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MansionAttackButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
