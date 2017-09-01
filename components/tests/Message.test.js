import React from 'react'
import renderer from 'react-test-renderer'
import Message from "../Message";
import { generateMessage } from "../../utils/tests";
import { mount } from "enzyme";
import Emoticon from "../Emoticon";

describe('<Message />', () => {
    it('should render correctly"', () => {
        // a similar test (snapshot test) can be written for the other components
        const message = generateMessage('me');

        const component = renderer.create(<Message message={message} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should include EMOTICON component if valid emoticon string provided', () => {
        const message = generateMessage('me');
        message.content = 'Hey, this is a (smile)! ... but now I am (frown)';

        const component = mount(<Message message={message} />);
        expect(component.find(Emoticon)).toHaveLength(2);
    });
});