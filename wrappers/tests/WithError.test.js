import { mount } from 'enzyme';
import React from "react";
import WithError from "../WithError";
import Error from "../../components/Error";

describe('<WithError />', () => {
    it('should render the error, if provided"', () => {
        const component = mount(<WithError error="any error">
            <div />
        </WithError>);
        console.log(component.debug());

        console.log(component.find(<Error error="any error" />));
    });
});