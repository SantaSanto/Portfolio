import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const style = {
    CardHeader: {
        paddingBottom: '0px'
    },
    content: {
        paddingTop: '0px'
    }
}

const titleTypographyProps = {
    variant: 'h6'
}

export const Section = ({ title, index, selectedTab, children }) => {
    if (index != selectedTab) return null
    return (
        <Card>
            <CardHeader
                style={style.CardHeader}
                title={title}
                titleTypographyProps={titleTypographyProps} />
            <CardContent style={style.content}>
                {children}
            </CardContent>
        </Card>
    )
}