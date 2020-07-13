import React from 'react'

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles'

import { deepOrange } from '@material-ui/core/colors'
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    }
}));

export const ListIcon = ( {letter} ) => {
    const classes = useStyles();
    const randColor = randomColor();
    const avatarColor = classes[randColor]
    return (
        <ListItemAvatar>
            <Avatar className={avatarColor}>{letter}</Avatar>
        </ListItemAvatar>
    )
}

function randomColor() {
    const randNumber = Math.floor(Math.random() * 5) + 1; 
    switch(randNumber) {
        case 1: return 'orange';
        case 2: return 'orange';
        case 3: return 'purple';
        case 4: return 'purple';
        case 5: return 'orange';
        default: return '';
      }
}