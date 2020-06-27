import React from 'react'

import { NavBar } from '../comp/NavBar'
import { Page, PageContent } from '../comp/Page'
import { Notification } from '../comp/Notification'

import { TxnForm } from '../comp/txn/TxnForm'
import { createTxn } from '../comp/txn/TxnService'

class NewTxn extends React.Component {

	constructor(props) {
		super(props);

		const {assetId} = props.match.params

		this.state = {
			txn: {
				assetId: assetId
			},
			successMsg: false
		}
	}

	handleSubmit = (formData) => {
		console.log(formData)
		createTxn(formData).then(
			res => this.setState({ successMsg: true })
		)
	}

	render() {
		const { txn, successMsg } = this.state

		return (
			<Page>
				<NavBar title="New Transaction" />
				<PageContent>
					<Notification show={successMsg} href={`/viewAsset/${txn.assetId}`}>
						New Transaction has been <strong> added </strong>
					</Notification>

					<TxnForm txn={txn} onSubmit={this.handleSubmit} />
				</PageContent>
			</Page>
		)
	}
}

export default NewTxn;
