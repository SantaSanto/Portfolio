import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from '@material-ui/core/Link';

import { PageMenu } from './PageMenu'

const useStyles = makeStyles((theme) => ({
    title: {
        paddingLeft: '16px',
        paddingRight: '16px',
        flexGrow: 1,
    },
}));

export const PageBar = ({ title, iconProps, menuProps }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <PageIcon iconProps={iconProps} />
                <PageTitle title={title} />
                <PageMenu menuProps={menuProps} />
            </Toolbar>
        </AppBar>
    )
}

const PageIcon = ({iconProps}) => {
    const { type, url } = iconProps
    return (
        <Link href={url} color="inherit">
            {iconStrategy(type)}
        </Link>
    )
}


const PageTitle = ({ title }) => {
    const style = useStyles();
    return (
        <Typography variant="h6" className={style.title}>
            {title}
        </Typography>
    )
}

const iconStrategy = (type) => {
    switch (type) {
        case 'Home':
            return <HomeIcon />
        case 'Back':
            return <ArrowBackIcon />
        default:
            return null;
    }
}