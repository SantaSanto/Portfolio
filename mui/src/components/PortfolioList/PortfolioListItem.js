import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { PortfolioListIcon } from './PortfolioListIcon'

export const PortfolioListItem = ({ folio }) => {
    const { _id, name, desc } = folio
    const letter = name.charAt(0).toUpperCase()
    return (
        <ListItem key={_id} button component="a" href={`/folio/view/${_id}`}>
            <PortfolioListIcon letter={letter} />
            <ListItemText 
                primary={name} 
                secondary={desc}/>
        </ListItem>
    )
}

