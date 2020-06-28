import React from 'react';
import {Currency} from '../format/CurrencyFormat'

export const AssetList = ({assets}) => {
    return (
        <div className="panel is-primary">
            { assets.map(a => <AssetListItem asset={a} /> )}
        </div>
    )
}

const AssetListItem = ({asset}) => {
    const { id, name, type, institution, invested, nav } = asset
    return (
        <a className="panel-block" href={`/viewAsset/${id}`}>
            <div className="columns is-mobile" style={{width: '100%'}}>
                <div className="column is-8">
                    <ul>
                        <li className="has-text-primary">{name}</li>
                        <li>
                            <Tag>{type}</Tag>
                            <Tag>{institution}</Tag>
                        </li>
                    </ul>                   
                </div>
                <div className="column is-4 has-text-right">
                    <ul>
                        <li><Currency value={nav} /></li>
                    </ul>
                </div>
            </div>
        </a>
    )
}

const Tag = ({children}) => <span className="tag is-primary mr-1">{children}</span>