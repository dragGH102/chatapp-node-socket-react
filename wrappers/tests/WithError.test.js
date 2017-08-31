import { mount } from 'enzyme';
import React from "react";
import WithError from "../WithError";
import Error from "../../components/Error";

describe('<WithError />', () => {
    it('should render the error, if provided"', () => {
        const component = mount(<WithError error="any error">
            <div />
        </WithError>);
        expect(component.find(Error)).toHaveLength(1);
    });
});