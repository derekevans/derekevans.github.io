
import React from 'react'
import NavbarName from './NavbarName'
import NavbarMenu from './NavbarMenu'
import HamburgerMenu from './HamburgerMenu'
import './Navbar.scss'


export default class Navbar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            active: false,
            version: 1
        }

        this.handleActive = this.handleActive.bind(this)
    }

    render() {
        return <div className='navbar-container'>
            <div className={this.state.active ? 'navbar active' : 'navbar'}>
                <HamburgerMenu key={this.state.version} onClick={this.handleActive}/>
                <NavbarName/>
                <NavbarMenu/>
            </div>
        </div>
    }

    handleActive(active) {
        this.setState({active: active})
    }
}