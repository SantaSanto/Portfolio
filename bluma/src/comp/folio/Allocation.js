import React from 'react';
import {Currency} from '../format/CurrencyFormat'

export const Allocation = ({ allocations }) => {
    return (
        <div className="table-container">
            <table className="table is-bordered is-narrow is-striped is-fullwidth">
                <thead>
                    <th className="has-text-centered">ASSET</th>
                    <th className="has-text-centered">NAV</th>
                    <th className="has-text-centered">WEIGHT</th>
                </thead>
                <tbody>
                    {allocations.map(allocation => AllocationRow(allocation) )}
                </tbody>
            </table>
        </div>
    )
}

const AllocationRow = (allocation) => {
    return (
        <tr>
            <th>{allocation.type}</th>
            <td className="has-text-right"><Currency value={allocation.nav} /></td>
            <td className="has-text-right">{allocation.weight}</td>
        </tr>
    )
}