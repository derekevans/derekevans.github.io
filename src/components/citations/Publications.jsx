
import React from 'react'


export default class Publications extends React.Component {

    PUBLICATIONS = [
        "Evans, D.A., K.W.J. Williard, and J.E. Schoonover. (2016). Comparison of terrain indices and landform classification procedures in low-relief agricultural fields. Journal of Geospatial Applications in Natural Resources, 1, 1-17. Available at: <a href=\"http://scholarworks.sfasu.edu/j_of_geospatial_applications_in_natural_resources/vol1/iss1/1\">http://scholarworks.sfasu.edu/j_of_geospatial_applications_in_natural_resources/vol1/iss1/1</a>.",
    ]

    render() {
        return <React.Fragment>
            <h2>Publications</h2>

	        { this.PUBLICATIONS.map((pub, idx) => {
                return <p key={idx}>{pub}</p>
            })}

        </React.Fragment>
    }
}