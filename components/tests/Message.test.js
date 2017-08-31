import React from 'react'
import renderer from 'react-test-renderer'
import Message from "../Message";
import { generateMessage } from "../../utils/tests";

// a similar test (snapshot test) can be written for the other components
describe('<Message />', () => {
    it('should render correctly"', () => {
        const message = generateMessage('me');

        const component = renderer.create(<Message message={message} />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});