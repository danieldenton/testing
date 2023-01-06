import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("renders nonemty component without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
