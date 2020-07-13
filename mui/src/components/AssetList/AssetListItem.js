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

export const AssetListItem = ({ asset }) => {
    const { _id, name, type, fi, holder, nav } = asset
    const letter = type?.charAt(0).toUpperCase()
    const href = `/asset/view/${_id}`
    return (
        <ListItem key={_id} button component="a" href={href} style={style.ListItem} >
            <ListIcon letter={letter} />
            <ListItemText 
                primary={name}
                secondary={`${fi} - ${holder}`} />                
            <ListItemSecondaryAction>{nav}</ListItemSecondaryAction>
        </ListItem>
    )
}

