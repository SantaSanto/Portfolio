import React from 'react';
import { Field } from 'formik';

const SelectInput = (props) => {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <div className="select is-link is-fullwidth">
                    <Field as="select" {...props} >
                        {props.data.map(o => SelectOption(o))}
                    </Field>
                </div>
            </div>
        </div>
    )
}

const SelectOption = (option) => {
    return (
        <option value={option.key}>
            {option.value}
        </option>)
}

export default SelectInput;