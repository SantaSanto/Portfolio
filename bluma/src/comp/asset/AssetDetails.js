import React from 'react'
import {Currency} from '../format/CurrencyFormat'

export const AssetDetails = ({ asset }) => {
	return (
		<div className="table-container">
			<table className="table is-bordered is-narrow is-striped is-fullwidth">
				<tr><th>Asset Name</th>	    <td>{asset.name}</td></tr>
				<tr><th>Asset Category</th>	<td>{asset.type}</td></tr>
				<tr><th>Institution</th>    <td>{asset.institution}</td></tr>
				<tr><th>Holder</th>         <td>{asset.holder}</td></tr>
				<tr><th>Start Date</th>     <td>{asset.startDate}</td></tr>
				<tr><th>End Date</th>       <td>{asset.endDate}</td></tr>
				<tr><th>Invested</th>       <td><Currency value={asset.invested} /></td></tr>
				<tr><th>NAV</th>            <td><Currency value={asset.nav} /></td></tr>
			</table>
		</div>
	)
}