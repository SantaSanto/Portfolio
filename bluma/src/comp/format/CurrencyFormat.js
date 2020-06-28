import React from 'react';
import NumberFormat from 'react-number-format'

const style = {
    whiteSpace: 'nowrap'
}

export const Currency = ({ value, scale = 2 }) => {
    const className = (value < 0) ? "has-text-danger" : "has-text-success"
    return (
        <NumberFormat
            className={className} style={style}
            value={value} displayType={'text'}
            decimalScale={scale} fixedDecimalScale={true}
            thousandSeparator={true}
            prefix={'₹ '} />
    )
}