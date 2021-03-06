import React from 'react'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import { Page } from '../components/Page'
import { Section } from '../components/Page/Section'
import { AssetList } from '../components/AssetList'

import { folioService } from '../service/PortfolioService'
import { assetService } from '../service/AssetService'

export class Folio extends React.Component {

    constructor(props) {
        super(props)    

        const { folioId } = this.props.match.params
        
        this.state = {
            folio: {
                _id: folioId
            },
            assets: {},
            selectedTab: 0
        }       



        this.iconProps = { 
            type: 'Back', url: '/' 
        }

        this.menuProps = [
            {label: 'Add Asset', url: `/asset/${folioId}/new`}
        ]

    }

    async componentDidMount() {
        const { _id: folioId } = this.state.folio

        const _folio = await folioService.get(folioId)
        this.setState({ folio: _folio })

        const _assets = await assetService.getByFolioId(folioId)
        this.setState({ assets: _assets })
    }

    onTabChange = (event, value) => {
        this.setState({ selectedTab: value })
    }

    render() {
        const {iconProps, menuProps} = this
        const { folio, assets, selectedTab } = this.state
     
        return (
            <Page title={folio.name} iconProps={iconProps} menuProps={menuProps}>

                <Paper elevation="5">
                    <Tabs value={selectedTab} onChange={this.onTabChange}
                        variant="fullWidth" indicatorColor="primary" textColor="primary" >
                        <Tab label="Allocation" />
                        <Tab label="Assets" />
                    </Tabs>
                </Paper>

                <Section title="Allocation" index="0" selectedTab={selectedTab}>

                </Section>

                <Section title="Assets" index="1" selectedTab={selectedTab}>
                    <AssetList assets={assets} />
                </Section>


            </Page>
        )
    }
}

