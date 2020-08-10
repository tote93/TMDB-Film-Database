import React from "react";
import EnzymeAdapter, { shallow, mount } from "enzyme";
import Search from "../pages/Search";
import Adapter from "enzyme-adapter-react-16";
import Row from "../components/Row";

EnzymeAdapter.configure({ adapter: new Adapter() });

const wrapper = shallow(<Search />);
describe("Search component", () => {
  test("Render the Search Component", () => {
    expect(wrapper.exists()).toBe(true);
  });
  test("Input value on change", () => {
    wrapper.find("input").simulate("change", {
      target: { value: "test" },
    });
    expect(wrapper.find("input").props().value).toEqual("test");
  });

  test("Row element not rendered without set the state", () => {
    expect(wrapper.find(<Row />)).toHaveLength(0);
  });
});
