import React from 'react';
import { Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import { HomePage } from './HomePage'
import { FolioForm } from './FolioForm'
import { Folio } from './Folio'
import { AssetForm } from './AssetForm'
import { Asset } from './Asset'
import { TxnForm } from './TxnForm'

export const PageRouter = () => {
	return (
		<BrowserRouter>
			<Route path="/" exact component={HomePage} />
			<Route
				path="/folio/new"
				render={props => <FolioForm {...props} />} />

			<Route
				path='/folio/view/:folioId'
				render={props => <Folio {...props} />} />

			<Route
				path="/asset/:folioId/new"
				render={props => <AssetForm mode="New" {...props} />} />

			<Route
				path="/asset/view/:assetId/"
				render={props => <Asset {...props} />} />

			<Route
				path="/txn/:assetId/new"
				render={props => <TxnForm mode="New" {...props} />} />

		</BrowserRouter>
	)
}




