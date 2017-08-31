import { mount } from 'enzyme';
import ChatApp from "../index";

describe('<ChatApp />', () => {
    describe('handleNewMessage', () => {
        // class' property tested via DOM interaction simulation and state check
        it('submitError should have been set if error', () => {
            const wrapper = mount(<ChatApp />);
            wrapper.find('input').node.value = '/invalid_command';
            wrapper.find('button').simulate('click');
            console.log(wrapper.state());
        });

        it('if command = oops, should remove corresponding message', () => {
            // TODO
        });

        it('if not a command, should add the message to messages', () => {
            // TODO
        });
    });
});