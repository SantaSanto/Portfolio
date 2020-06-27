import React from 'react'

import { Page, PageContent } from '../comp/Page'
import { NavBar } from '../comp/NavBar'
import { Notification } from '../comp/Notification'
import { DeleteButton } from '../comp/form/Button'

import { AssetDetails } from '../comp/asset/AssetDetails'

/** Dependent Service */
import { getAsset, deleteAsset } from '../comp/asset/AssetService'

export class DeleteAsset extends React.Component {

	constructor(props) {
		super(props);

		const {assetId} = props.match.params

		this.state = {
			asset: {
				id: assetId			
			},
			successMsg: false
		}
	}

	componentDidMount() {
		const { asset } = this.state

		getAsset(asset.id).then(
			res => this.setState({ asset: res.data })
		)
	}

	handleDelete = () => {
		const { asset } = this.state
		deleteAsset(asset.id).then(
			res => this.setState({ successMsg: true })
		)
	}

	render() {

		let { asset, successMsg } = this.state

		return (
			<Page>
				<NavBar title="Asset" />

				<PageContent title="Delete Asset">
					<Notification show={successMsg} href={`/portfolio/${asset.folioId}`}>
						Asset has been <strong> deleted </strong>
					</Notification>
					<AssetDetails asset={asset}/>	
					<DeleteButton label="Confirm" onClick={this.handleDelete}/>				
				</PageContent>
			</Page>
		)
	}
}

export default DeleteAsset