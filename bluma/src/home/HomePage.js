import React from 'react';

import { Page, PageContent } from '../comp/Page'
import { NavBar } from '../comp/NavBar'

import { getFolios } from '../comp/folio/PortfolioService'

class HomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            folios: []
        }
    }

    componentDidMount() {
        getFolios().then(
            res => this.setState({ folios: res.data })
        )
    }

    render() {
        return (
            <Page>
                <NavBar title="Home" />
                <PageContent title="Current Portfolios">
                    <PortfolioList folios={this.state.folios} />
                </PageContent>
            </Page>
        )
    }
}

const PortfolioList = ({folios}) => {
    return (
        <div className="panel is-primary">
            { folios.map(f => <PortfolioListItem folio={f} /> )}
        </div>
    )
}

const PortfolioListItem = ({folio}) => {
    const {id, name} = folio
    return (
        <a className="panel-block" href={`/portfolio/${id}`}>
             <ul>
                <li><b>{name}</b></li>
            </ul>           
        </a>
    )
}

const PortfolioIcon = () => {
    return (
        <span class="panel-icon">
            <i class="fa fa-briefcase" aria-hidden="true"></i>
        </span>
    )
}

export default HomePage