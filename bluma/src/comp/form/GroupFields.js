import React from 'react';

const GroupFields = (props) => {
    return (
        <div className="field is-grouped is-grouped-centered">
            {props.children.map(c => <ControlField innerElement={c} /> )} 
        </div>        
    )
}

const ControlField = (props) => {
    return (
        <p class="control is-expanded">
            {props.innerElement}
        </p>
    )
}

export default GroupFields;