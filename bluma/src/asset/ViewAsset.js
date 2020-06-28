import React from 'react'

import { Page, PageContent } from '../comp/Page'
import { NavBar, MenuItem } from '../comp/NavBar'

import { FilterInputText } from '../comp/form/FilterInput'
import { AssetDetails } from '../comp/asset/AssetDetails'
import { TxnList } from '../comp/txn/TxnList'

/** Dependent Service */
import { getAsset } from '../comp/asset/AssetService'
import { getTxnByAsset } from '../comp/txn/TxnService'

export class ViewAsset extends React.Component {

	constructor(props) {
		super(props);

		const {assetId} = props.match.params

		this.state = {
			asset: {
				id: assetId			
			},
			txns : []		
		}
	}

	componentDidMount() {
		const { asset } = this.state

		getAsset(asset.id).then(
			res => this.setState({ asset: res.data })
		)

		getTxnByAsset(asset.id).then(
			res => {
				console.log(res.data)
				this.setState({ txns: res.data })
			}
		)
	}

	render() {

		let { asset, txns } = this.state

		return (
			<Page>
				<NavBar title="Asset" menuLabel="Action">
					<MenuItem href={`/portfolio/${asset.folioId}`}>Portfolio</MenuItem>
					<MenuItem href={`/newTxn/${asset.id}`}>Add Transaction</MenuItem>
					<MenuItem href={`/editAsset/${asset.id}`}>Edit Asset</MenuItem>
					<MenuItem href={`/deleteAsset/${asset.id}`}>Delete Asset</MenuItem>

				</NavBar>

				<PageContent title="Asset Details">
					<AssetDetails asset={asset}/>
				</PageContent>

				<PageContent title="Asset Transactions">
					<FilterInputText />
                    <TxnList txns={txns} />
				</PageContent>

			</Page>
		)
	}
}

export default ViewAsset