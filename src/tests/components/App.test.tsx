import React from "react";
import { shallow } from "enzyme";
import App from "../../components/App";

test("should render App correctly", (): void => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});
