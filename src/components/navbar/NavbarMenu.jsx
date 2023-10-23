
import React from 'react'
import NavbarMenuItem from './NavbarMenuItem'

export default class NavbarMenu extends React.Component {

    render() {
        return <React.Fragment>
            <div className='navbar-menu'>
                { this.items.map((item, idx) => {
                        let props = { ...item, ...{key: idx} }
                        return React.createElement(NavbarMenuItem, props)
                    })
                }
            </div>
            <div className='navbar-overlay'/>
        </React.Fragment>
    }

    get items() {
        return [
            {
                name: 'Pubs & Presentations',
                href: '/pubs'
            }
        ]
    }
}