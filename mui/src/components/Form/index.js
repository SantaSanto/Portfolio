import React from 'react'

import MenuItem from '@material-ui/core/MenuItem';

import { TextField } from 'final-form-material-ui';
import { Select } from 'final-form-material-ui';
import { Field } from 'react-final-form'

export const TextInput = (props) => {
    return (<Field fullWidth component={TextField} {...props} />)
}

const selectProps = {
    fullWidth: true
}

export const SelectInput = (props) => {
    const {name, label, options} = props
    const {optionKey, optionLabel} = props
    
    return (
        <Field name={name} label={label} fullWidth component={Select} formControlProps={selectProps} >
            {options.map( option => (
                <MenuItem value={option[optionKey]}>
                    {option[optionLabel]}
                </MenuItem>
            ))}
        </Field>
    )
}