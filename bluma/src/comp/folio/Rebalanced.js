import React from 'react';
import {Currency} from '../format/CurrencyFormat'

export const Rebalanced = ({ allocations }) => {
    return (
        <div className="table-container">
            <table className="table is-bordered is-narrow is-striped is-fullwidth">
                <thead>
                    <th className="has-text-centered">ASSET</th>
                    <th className="has-text-centered">NAV</th>
                </thead>
                <tbody>
                    {allocations.map(allocation => RebalancedRow(allocation) )}
                </tbody>
            </table>
        </div>
    )
}

const RebalancedRow = (allocation) => {
    if(allocation.balanced == null) {
        return null
    }

    return (
        <tr>
            <th>{allocation.type}</th>
            <td className="has-text-right"><Currency value={allocation.balanced} /></td>
        </tr>
    )
}