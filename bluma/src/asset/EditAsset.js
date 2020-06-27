import React from 'react'

import { Page, PageContent } from '../comp/Page'
import { NavBar } from '../comp/NavBar'
import { Notification } from '../comp/Notification'

import { AssetForm } from '../comp/asset/AssetForm'

/** Dependent Service */
import { getAsset, createAsset } from '../comp/asset/AssetService'

class NewAsset extends React.Component {

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
			res => { this.setState({ asset: res.data }) }
		)
	}

	handleSubmit = (formData) => {
		createAsset(formData).then(
			res => this.setState({ successMsg: true })
		)
	}

	render() {
		const { asset, successMsg } = this.state

		return (
			<Page>
				<NavBar title="Edit Asset" />
				<PageContent>
					<Notification show={successMsg} href={`/viewAsset/${asset.id}`}>
						Asset has been <strong> modified </strong>
					</Notification>

					<AssetForm editMode asset={asset} onSubmit={this.handleSubmit} />
				</PageContent>
			</Page>
		)
	}
}

export default NewAsset;
