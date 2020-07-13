import React from 'react'

import List from '@material-ui/core/List';

import { TxnListItem } from './TxnListItem'

export const TxnList = ( {txns} ) => {
    if( txns == null ) return null
    return (
        <List dense="true">
            { txns.map( txn => <TxnListItem txn={txn} /> )}
        </List>
    )
}