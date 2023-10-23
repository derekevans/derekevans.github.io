
import React from 'react'


export default class AboutIcons extends React.Component {

    ICONS = [
        {
            href: 'https://www.linkedin.com/in/derek-evans',
            className: 'fa fa-linkedin'
        },
        {
            href: 'https://www.github.com/derekevans',
            className: 'fa fa-github'
        },
        {
            href: 'mailto:derekae88@gmail.com',
            className: 'fa fa-envelope'
        }
    ]

    render() {
        return <div className="about-icons">
            { this.ICONS.map((icon, idx) => {
                return <a href={icon.href} key={idx}>
                    <i className={icon.className} aria-hidden="true"/>
                </a>
            })}
        </div>
    }

}