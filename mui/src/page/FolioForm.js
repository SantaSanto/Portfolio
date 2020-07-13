import React from 'react'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Form } from 'react-final-form'

import { Page } from '../components/Page'
import { Section } from '../components/Page/Section'
import { TextInput } from '../components/Form'

import { validate, createFolio } from '../service/PortfolioService'



export class FolioForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            folio: {
                allocation: {
                    equity: 25, debt: 25, bullion: 25, cash: 25
                }
            }
        }

        this.iconProps = { 
            type: 'Back', url:  '/'
        }
    }

    onSubmit = async (folio) => {
        const result = createFolio(folio)
        if(result) {
            this.props.history.push('/')
        }
    };

    render() {
        const {iconProps} = this
        return (
            <Page title='Portfolio Form' iconProps={iconProps}>
                <Section title="Create Portfolio">
                    <br />
                    <Form onSubmit={this.onSubmit}
                        validateOnBlur={true} validate={validate}
                        initialValues={this.state.folio}
                        render={(props) => (
                            <form onSubmit={props.handleSubmit} noValidate>
                                <FolioFormComponent {...props} />
                            </form>
                        )} />
                </Section>
            </Page>
        )
    }
}

const FolioFormComponent = () => {
    return (
        <Grid container direction="row" justify="space-evenly" spacing="5">
            <Grid item xs="12" lg="12">
                <TextInput name="name" label="Name" required />
            </Grid>
            <Grid item xs="12" lg="12">
                <TextInput name="desc" label="Description" />
            </Grid>
            <Grid item xs="6" lg="3">
                <TextInput name="allocation.equity" label="Equity" type="number" />
            </Grid>
            <Grid item xs="6" lg="3">
                <TextInput name="allocation.debt" label="Debt" type="number" />
            </Grid>
            <Grid item xs="6" lg="3">
                <TextInput name="allocation.bullion" label="Bullion" type="number" />
            </Grid>
            <Grid item xs="6" lg="3">
                <TextInput name="allocation.cash" label="Cash" type="number" />
            </Grid>
            <Grid item xs="12" lg="12">
                <Button variant="contained" color="primary" type="submit">Create</Button>
            </Grid>
        </Grid>
    )
}

