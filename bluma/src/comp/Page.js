import React from 'react';

export const Page = ({children}) => {
    return(
        <React.Fragment>           
            {children}
        </React.Fragment>
    )
}

export const PageContent = ({ title, children }) => {
    return (
        <div className="box">
             <Subtitle title={title} />
            {children}
        </div>
    )
}

const Subtitle = ({ title }) => {
    return (
        <h3 className="subtitle has-text-primary is-5">
            <i>{title}</i>
        </h3>
    )
}




