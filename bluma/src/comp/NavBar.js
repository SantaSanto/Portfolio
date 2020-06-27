import React from 'react';


export class NavBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showMenu: false
        }
    }

    onMenuClick = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                showMenu : !prevState.showMenu
            }            
        })
    }

    render() {

        let { title, menuLabel, children } = this.props

        return (
            <nav className="navbar is-primary" >
                <TitleBar title={title} onMenuClick={this.onMenuClick}/>
                { children && 
                    <Menu label={menuLabel} display={this.state.showMenu}>
                        {children}
                    </Menu>
                }
            </nav>
        )
    }
}

const TitleBar = ({ title, onMenuClick }) => {
    return (
        <div className="navbar-brand">
            <div className="navbar-item">
                <span className="title is-5">{title}</span>
            </div>
            <a className="navbar-burger burger" onClick={onMenuClick}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    )
}



const Menu = ({ label, display, children }) => {

    const menuClass = display ? 'is-active' : ''

    return (
        <div className={`navbar-menu ${menuClass}`}>
            <div className="navbar-start">
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">{label}</a>
                    <div className="navbar-dropdown">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const MenuItem = ({ href, children }) => {
    return (
        <a href={href} class="navbar-item">{children}</a>
    )
}