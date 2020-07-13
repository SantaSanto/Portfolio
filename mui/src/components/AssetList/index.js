import React from 'react'

import List from '@material-ui/core/List';

import { AssetListItem } from './AssetListItem'

export const AssetList = ({ assets }) => {
    if(assets == null) return null
    return (
        <List>
            {assets.map(asset => <AssetListItem asset={asset} />)}
        </List>
    )
}