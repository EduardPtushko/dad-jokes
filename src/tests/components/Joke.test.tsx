import React from "react";
import { shallow } from "enzyme";
import Joke from "../../components/Joke";
import { jokes } from "../fixture/jokes";

test("should render Joke correctly", (): void => {
    const wrapper = shallow(
        <Joke {...jokes[0]} changeRating={(): void => {}} />,
    );
    expect(wrapper).toMatchSnapshot();
});
