import React from 'react';
import NumberFormat from 'react-number-format'

export const Currency = ({ value }) => {
    const className = (value < 0) ? "has-text-danger" : "has-text-success"
    return (
        <span className={className} style={{ whiteSpace: 'nowrap'}}>
            <NumberFormat value={value} displayType={'text'}
                decimalScale={2} fixedDecimalScale={true}
                thousandSeparator={true}
                prefix={'₹ '} />
        </span>
    )
}