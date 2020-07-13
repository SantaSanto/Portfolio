import React from 'react'

import List from '@material-ui/core/List';

import { PortfolioListItem } from './PortfolioListItem'

export const PortfolioList = ({ folios }) => {
    if(folios == null) return null
    return (
        <List>
            {folios.map(folio => <PortfolioListItem folio={folio} />)}
        </List>
    )
}