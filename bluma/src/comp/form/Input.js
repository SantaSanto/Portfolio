import React from 'react';
import { Field } from 'formik';

export const TextInput = (props) => {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <Field {...props} className="input is-link" type="text" />
            </div>
        </div>
    );
}

export const NumberInput = (props) => {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <Field {...props} className="input is-link" type="number" />
            </div>
        </div>
    );
}

export const DateInput = (props) => {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <Field {...props} className="input is-link" type="date" />
            </div>
        </div>
    );
}

export default TextInput;