import React from 'react';
import NumberFormat from 'react-number-format'

export const PercentageFormat = ({ value, scale = 2 }) => {
    return (
        <NumberFormat
            value={value} displayType={'text'}
            decimalScale={scale} fixedDecimalScale={true}
            thousandSeparator={true}
            suffix={'%'} />
    )
}