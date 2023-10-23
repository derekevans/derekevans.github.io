
import React from 'react'
import AboutImage from './AboutImage'
import AboutText from './AboutText'
import './About.scss'


export default class About extends React.Component {

    render() {
        return <div className='about'>
            <AboutImage/>
            <AboutText/>
        </div>
    }

}