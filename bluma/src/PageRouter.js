import React from 'react';
import {Route}  from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';

import HomePage from './home/HomePage'
import ViewPortfolio from './folio/ViewPortfolio'

import NewAsset  	from './asset/NewAsset'
import EditAsset 	from './asset/EditAsset'
import ViewAsset 	from './asset/ViewAsset'
import DeleteAsset 	from './asset/DeleteAsset'

import NewTxn from './txn/NewTxn'
import EditTxn from './txn/EditTxn'


class PageRouter extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<Route path="/" exact          		component={HomePage} />
				<Route path="/portfolio/:folioId"   component={ViewPortfolio} />				

				{/* Asset Routes */}
				<Route path="/newAsset/:folioId"    component={NewAsset} />
				<Route path="/viewAsset/:assetId"	component={ViewAsset} />
				<Route path="/editAsset/:assetId"	component={EditAsset} />
				<Route path="/deleteAsset/:assetId"	component={DeleteAsset} />
				

				{/* Transaction Routes */}
				<Route path="/newTxn/:assetId"  component={NewTxn} />
				<Route path="/editTxn/:txnId"   component={EditTxn} /> 

			</BrowserRouter>
		)
	}
}

export default PageRouter;
