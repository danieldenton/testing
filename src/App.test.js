import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import { render } from "@testing-library/react";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
});
