import React from "react";
import { shallow } from "enzyme";
import LokiButtons from "./LokiButtons";

describe("LokiButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LokiButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
