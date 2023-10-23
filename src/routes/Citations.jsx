
import React from 'react'
import ApplicationLayout from '../layouts/ApplicationLayout'
import PubsPresentations from '../components/citations/Citations'


export default class Citations extends React.Component {

    render() {
        return <ApplicationLayout>
            <PubsPresentations/>
        </ApplicationLayout>
    }
}