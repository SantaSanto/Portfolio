import React from 'react'

import { Page, PageContent } from '../comp/Page'
import { NavBar } from '../comp/NavBar'
import { Notification } from '../comp/Notification'
import { AssetForm } from '../comp/asset/AssetForm'

/** Dependent Service */
import { createAsset } from '../comp/asset/AssetService'

class NewAsset extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			asset: {
				folioId: props.match.params.folioId
			},
			successMsg: false
		}
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
				<NavBar title="New Asset" />
				<PageContent>
					<Notification show={successMsg} href={`/portfolio/${asset.folioId}`}>
						New asset has been <strong> added </strong>
					</Notification>

					<AssetForm asset={asset} onSubmit={this.handleSubmit} />
				</PageContent>
			</Page>
		)
	}
}

export default NewAsset;
