import React from 'react';

import { PageBar } from './PageBar'

export const Page = (props) => {
    const {title, iconProps, menuProps} = props
    const {children} = props
    return (
        <React.Fragment>
            <PageBar title={title} iconProps={iconProps} menuProps={menuProps} />
            {children}
        </React.Fragment>
    )
}


