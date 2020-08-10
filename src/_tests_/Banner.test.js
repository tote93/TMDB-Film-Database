import React from "react";
import EnzymeAdapter, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Banner from "../components/Banner";
EnzymeAdapter.configure({ adapter: new Adapter() });

describe("banner component", () => {
  test("Banner Element with no props", () => {
    const wrapper = shallow(<Banner appTitle="" />);
    expect(wrapper.find(".banner__title").text()).toEqual("");
  });
  test("Banner Element with props", () => {
    const wrapper = shallow(<Banner appTitle="JLGR" />);
    expect(wrapper.find(".banner__title").text()).toEqual("JLGR");
  });
});
