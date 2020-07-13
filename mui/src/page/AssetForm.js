import React from 'react'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Form } from 'react-final-form'

import { Page } from '../components/Page'
import { Section } from '../components/Page/Section'
import { TextInput, SelectInput } from '../components/Form'

import { ASSET_TYPE, ASSET_INSTITUTION, ASSET_HOLDER } from '../service/AssetService'
import { assetService } from '../service/AssetService'

export class AssetForm extends React.Component {

    constructor(props) {
        super(props)

        const { folioId } = this.props.match.params

        this.state = {
            asset: {
                folioId: folioId
            }
        }

        this.iconProps = { 
            type: 'Back', url: `/folio/view/${folioId}` 
        }
    }

    onSubmit = async (asset) => {
        const result = assetService.create(asset)
        if(result) {
            this.props.history.push(this.iconProps.url)
        }
    };

    render() {
        const {iconProps} = this
        const {asset} = this.state
        return (
            <Page title='Asset Form' iconProps={iconProps}>
                <Section title="Add Asset">
                    <Form onSubmit={this.onSubmit}
                        validateOnBlur={true} validate={assetService.validate}
                        initialValues={ asset }
                        render={(props) => (
                            <form onSubmit={props.handleSubmit} noValidate>
                                <IAssetForm {...props} />
                            </form>
                        )} />
                </Section>
            </Page>
        )
    }
}


const IAssetForm = (props) => {
    return (
        <Grid container direction="row" justify="space-evenly" spacing="5">
            <Grid item xs="12" lg="12">
                <TextInput name="name" label="Name" required />
            </Grid>
            <Grid item xs="12" lg="12">               
                <SelectInput name="type" label="Type" 
                    options={ASSET_TYPE} optionKey="key" optionLabel="value" />
            </Grid>
            <Grid item xs="6" lg="6">               
                <SelectInput name="fi" label="Institution" 
                    options={ASSET_INSTITUTION} optionKey="key" optionLabel="value" />
            </Grid>
            <Grid item xs="6" lg="6">               
                <SelectInput name="holder" label="Holder" 
                    options={ASSET_HOLDER} optionKey="key" optionLabel="value" />
            </Grid>
            <Grid item xs="12" lg="12">
                <Button variant="contained" color="primary" type="submit">Create</Button>
            </Grid>
        </Grid>
    )
}

