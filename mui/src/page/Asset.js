import React from 'react'

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';

import { Page } from '../components/Page'
import { Section } from '../components/Page/Section'
import { TxnList } from '../components/TxnList'

import { assetService } from '../service/AssetService'
import { txnService } from '../service/TxnService'

export class Asset extends React.Component {

    constructor(props) {
        super(props)

        const { assetId } = this.props.match.params

        this.state = {
            asset: {
                _id: assetId
            },
            txns: [],

            selectedTab: 0
        }

        this.iconProps = {
            type: 'Back', url: '/'
        }

        this.menuProps = [
            { label: 'Add Transaction', url: `/txn/${assetId}/new` }
        ]

    }

    async componentDidMount() {
        const { asset } = this.state

        const _asset = await assetService.get(asset._id)
        this.setState({ asset: _asset })

        const _txns = await txnService.getTxnByAssetId(asset._id)
        this.setState({ txns: _txns })
    }

    onTabChange = (event, value) => {
        this.setState({ selectedTab: value })
    }

    render() {
        const { iconProps, menuProps } = this
        const { asset, txns, selectedTab } = this.state

        return (
            <Page title={asset.name} iconProps={iconProps} menuProps={menuProps}>
                <Paper elevation="5">
                    <Tabs value={selectedTab} onChange={this.onTabChange}
                        variant="fullWidth" indicatorColor="primary" textColor="primary" >
                        <Tab label="Asset Details" />
                        <Tab label="Transaction" />
                    </Tabs>
                </Paper>

                <Section title="Asset Details" index="0" selectedTab={selectedTab}>
                   
                    <List component="li" dense="true">
                        <ListItem>
                            <ListItemText primary="Asset Type" />
                            <ListItemSecondaryAction>{asset.type}</ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Institution" />
                            <ListItemSecondaryAction>{asset.fi}</ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Holder" />
                            <ListItemSecondaryAction>{asset.holder}</ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Net Asset Value" />
                            <ListItemSecondaryAction>{asset.nav}</ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Deposit" />
                            <ListItemSecondaryAction>{asset.deposit}</ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText primary="Credit" />
                            <ListItemSecondaryAction>{asset.credit}</ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Section>

                <Section title="Transaction" index="1" selectedTab={selectedTab}>
                    <TxnList txns={txns} />
                </Section>
            </Page>
        )
    }
}

