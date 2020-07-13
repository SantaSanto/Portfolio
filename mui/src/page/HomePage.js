import React from 'react'

import { Page } from '../components/Page'
import { Section } from '../components/Page/Section'
import { PortfolioList } from '../components/PortfolioList'

import { folioService } from '../service/PortfolioService'

export class HomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            folios: []
        }
        
        this.iconProps = { 
            type: 'Home' 
        }

        this.menuProps = [
            {label: 'Create Portfolio', url: `/folio/new`}
        ]
    }

    async componentDidMount() {
        const _folios = await folioService.getAll()
        this.setState({ folios: _folios })         
    }    

    render() {
        const {iconProps, menuProps} = this
        const {folios} = this.state
        return (
            <Page title='Asset Manager' iconProps={iconProps} menuProps={menuProps} >                
                <Section title='Portfolio'>
                    <PortfolioList folios={folios} />   
                </Section>
            </Page>
        )
    }
}

