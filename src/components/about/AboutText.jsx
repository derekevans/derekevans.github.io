
import React from 'react'
import AboutIcons from './AboutIcons'


export default class AboutText extends React.Component {

    render() {
        return <div className="about-txt">

            <h2>Hello, I'm Derek Evans</h2>
            <p>A dynamic and innovative data scientist with 13 years in agricultural R&D and eager to develop scientific software that helps manage and conserve natural resources.</p>
        
            <AboutIcons/>
            
        </div>
    }

}