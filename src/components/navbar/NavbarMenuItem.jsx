
import React from 'react'


export default class NavbarMenuItem extends React.Component {

    render() {
        return <div className='navbar-menu-item'>
            <a href={this.props.href} onClick={this.props.onClick}>
                {this.props.name}
            </a>
        </div>
    }
}