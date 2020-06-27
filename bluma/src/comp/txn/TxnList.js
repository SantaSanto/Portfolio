import React from 'react';
import {Currency} from '../format/CurrencyFormat'


export const TxnList = ({ txns }) => {
    return (
        <div className="panel is-primary">
            {txns.map(t => <TxnListItem txn={t} />)}
        </div>
    )
}

const TxnListItem = ({ txn }) => {
    const { id, date, type, amount } = txn
    return (
        <a className="panel-block" href={`/editTxn/${id}`}>
            <div className="columns is-mobile" style={{width: '100%'}}>
                <div className="column is-9">{date} <br/> <Tag>{type}</Tag></div>
                <div className="column is-3 has-text-right" style={{margin: 'auto'}}>
                    <Currency value={amount} />
                </div>
            </div>
        </a>
    )
}

const Tag = ({ children }) => <span className="tag is-primary mr-1">{children}</span>