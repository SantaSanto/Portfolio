import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { ListIcon } from '../ListIcon'

const style = {
    ListItem : {
        paddingLeft: '4px'
    }
}

export const TxnListItem = ( {txn} ) => {
    const { _id, date, type, amount } = txn
    const letter = type?.charAt(0).toUpperCase()
    const href = `#`
    return (
        <ListItem key={_id} button component="a" href={href} style={style.ListItem} >
            <ListIcon letter={letter} />
            <ListItemText primary={date} secondary={type} />                
            <ListItemSecondaryAction>{amount}</ListItemSecondaryAction>
        </ListItem>
    )
}

