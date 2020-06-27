import React from 'react';

export const Button = (props) => {
    return (
        <div className="field">
            <div className="control">
                <button {...props} className="button is-link">{props.label}</button>
            </div>
        </div>
    );
};

export const DeleteButton = (props) => {
    return (
        <div className="field">
            <div className="control">
                <button {...props} className="button is-danger">{props.label}</button>
            </div>
        </div>
    );
};