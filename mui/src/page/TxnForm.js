import React from 'react'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Form } from 'react-final-form'

import { Page } from '../components/Page'
import { Section } from '../components/Page/Section'
import { TextInput, SelectInput } from '../components/Form'

import { TXN_TYPE } from '../service/TxnService'
import { txnService } from '../service/TxnService'


export class TxnForm extends React.Component {

    constructor(props) {
        super(props)

        const { assetId } = this.props.match.params

        this.state = {
            txn: {
                assetId: assetId
            }
        }

        this.iconProps = { 
            type: 'Back', url: `/asset/view/${assetId}` 
        }
    }

    onSubmit = async (txn) => {
        const result = txnService.create(txn)
        if(result) {
            this.props.history.push(this.iconProps.url)
        }
    };

    render() {
        const {iconProps} = this
        const { txn } = this.state
        return (
            <Page title='Transaction Form' iconProps={iconProps}>
                <Section title="Add Transaction">
                    <br/>
                    <Form onSubmit={this.onSubmit}
                        validateOnBlur={true} validate={txnService.validate}
                        initialValues={ txn }
                        render={(props) => (
                            <form onSubmit={props.handleSubmit} noValidate>
                                <ITxnForm {...props} />
                            </form>
                        )} />
                </Section>
            </Page>
        )
    }
}


const ITxnForm = (props) => {
    return (
        <Grid container direction="row" justify="space-evenly" spacing="5">
            <Grid item xs="6" lg="6">
                <TextInput name="date" label="Date" type="date" required 
                    InputLabelProps={{ shrink: true }}/>
            </Grid>
            <Grid item xs="6" lg="6">               
                <SelectInput name="type" label="Type" required
                    options={TXN_TYPE} optionKey="key" optionLabel="value" />
            </Grid>
            <Grid item xs="12" lg="12">               
                <TextInput name="amount" label="Amount" type="number" required />
            </Grid>
            <Grid item xs="12" lg="12">
                <Button variant="contained" color="primary" type="submit">Create</Button>
            </Grid>
        </Grid>
    )
}

