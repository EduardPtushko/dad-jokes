import React from "react";
import { shallow } from "enzyme";
import EmojiRating from "../../components/EmojiRating";
import { jokes } from "../fixture/jokes";

test("should render EmojiRating correctly", (): void => {
    const rating = jokes[0].rating;
    const wrapper = shallow(<EmojiRating rating={rating} />);
    expect(wrapper).toMatchSnapshot();
});
