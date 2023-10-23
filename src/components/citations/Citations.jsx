
import React from 'react'
import Publications from './Publications'
import Presentations from './Presentations'
import PublishedAbstracts from './PublishedAbstract'
import './Citations.scss'

export default class Citations extends React.Component {

    render() {
        return <div className='citations-container'>
            <Publications/>
            <PublishedAbstracts/>
            <Presentations/>
        </div>
    }
}