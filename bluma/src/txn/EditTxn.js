import React from 'react'

import { NavBar } from '../comp/NavBar'
import { Page, PageContent } from '../comp/Page'
import { Notification } from '../comp/Notification'

import { TxnForm } from '../comp/txn/TxnForm'
import { getTxn, createTxn, deleteTxn } from '../comp/txn/TxnService'

class EditTxn extends React.Component {

	constructor(props) {
		super(props);

		const {txnId} = props.match.params

		this.state = {
			txn: {
				id: txnId
			},
			deleteMode: false,
			successMsg: false
		}
	}
		
	componentDidMount() {
		const { txn } = this.state
		getTxn(txn.id).then(
			res => { this.setState({ txn: res.data }) }
		)
	}

	handleSubmit = (formData) => {
		createTxn(formData).then(
			res => this.setState({ successMsg: true })
		)
	}

	handleDelete = () => {
		const {txn, deleteMode} = this.state;

		if(!deleteMode) {
			this.setState({ deleteMode: true })
			return
		}

		deleteTxn(txn.id).then(
			res => this.setState({ successMsg: true })
		)

	}

	render() {
		const { txn, deleteMode, successMsg } = this.state

		return (
			<Page>
				<NavBar title="Edit Transaction" />
				<PageContent>
					<Notification show={!deleteMode && successMsg} href={`/viewAsset/${txn.assetId}`}>
						New Transaction has been <strong> updated </strong>
					</Notification>
					<Notification show={deleteMode && successMsg} href={`/viewAsset/${txn.assetId}`}>
						New Transaction has been <strong> deleted </strong>
					</Notification>

					<TxnForm editMode deleteMode={deleteMode} txn={txn}
						onSubmit={this.handleSubmit} 
						onDelete={this.handleDelete} />
				</PageContent>
			</Page>
		)
	}
}

export default EditTxn;
