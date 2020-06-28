import React from 'react';

export const FilterInputText = (props) => {
    const {onChange} = props
    return (
        <div className="field">
            <div className="control is-expanded">
                <input class="input" type="text" placeholder="Filter" onChange={onChange}/>
            </div>
        </div>
    )
}

