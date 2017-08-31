import { mount } from 'enzyme';
import React from "react";
import WithError from "../WithError";

describe('<WithError />', () => {
    it('should render the error, if provided"', () => {
        const Child = React.createElement('div', null, `anything`);
        const component = mount(<WithError>
            <Child />
        </WithError>)
    });
});