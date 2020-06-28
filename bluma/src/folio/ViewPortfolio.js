import React from 'react';

import { Page, PageContent } from '../comp/Page'
import { NavBar, MenuItem } from '../comp/NavBar'
import { FilterInputText } from '../comp/form/FilterInput'

import { AssetList } from '../comp/asset/AssetList'
import { Allocation } from '../comp/folio/Allocation'
import { Rebalanced } from '../comp/folio/Rebalanced'


import { getAssetByFolio, filterAsset } from '../comp/asset/AssetService'
import { getFolioAllocation } from '../comp/folio/PortfolioService'

export class ViewPortfolio extends React.Component {

    constructor(props) {
        super(props);

        const {folioId} = props.match.params

        this.state = {
            portfolio : {
                id: folioId
            },
            assets: [],
            allocations: [],
            filterText: ""
        };
    }

    filterChange = (e) => {
        const {value} = e.target
        this.setState({filterText: value})
    }

    
    componentDidMount() {
        const { portfolio } = this.state
        getAssetByFolio(portfolio.id).then(
            res => this.setState({ assets: res.data })
        )

        getFolioAllocation(portfolio.id).then (
            res => this.setState({ allocations: res.data })
        )
    }

    render() {

        const { portfolio, assets, allocations, filterText} = this.state;

        const filterAssets = assets.filter((asset) => {
            return filterAsset(asset, filterText)
        });

        return (
            <Page >                 
                 <NavBar title="Portfolio" menuLabel="Action">
                     <MenuItem href="/">Home</MenuItem>
                     <MenuItem href={`/newAsset/${portfolio.id}`}>Add Asset</MenuItem>
                 </NavBar>

                 <PageContent title="Asset Allocation">
                    <Allocation allocations={allocations} />
                </PageContent>

                <PageContent title="Rebalanced Allocation">
                    <Rebalanced allocations={allocations} />
                </PageContent>

                <PageContent title="Current Assets">
                    <FilterInputText onChange={this.filterChange}/>
                    <AssetList assets={filterAssets} />
                </PageContent>
            </Page>
        )
    }
}

export default ViewPortfolio