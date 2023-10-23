

import React from 'react'


export default class PublishedAbstracts extends React.Component {

    ABSTRACTS = [
        "Montano, N., K. Williard, A. Somor, De. Evans, C. Goldstein, J. Groninger, J. Schoonover. 2012. Impacts of Autumn Olive (Elaeagnus umbellata Thunb.) on Stream Nitrogen Levels in Headwater Watersheds in Southern Illinois. Presented at Riparian Ecosystems IV: Advancing Science, Economics and Policy in Denver, CO, Jun. 27, 2012.",
		"Montano, N., K.W.J. Williard, A. Somor, D. Evans, C. Goldstein, J. Groninger, and J. Schoonover. 2011. Nitrogen cycling in headwater watersheds and in managed stands of autumn olive (Elaeagnus umbellata Thunb.) in Southern Illinois.",
		"Williard, K.W.J., A. Somor, D. Evans, R. Davison, J. Groninger, and J.E. Schoonover. 2010. Nitrogen leaching from harvested and intact autumn olive patches in southern Illinois. American Water Resources Association National Meeting. Philadelphia, PA. Nov. 1-4, 2010."
    ]

    render() {
        return <React.Fragment>
            <h2>Published Abstracts</h2>

	        { this.ABSTRACTS.map((pub, idx) => {
                return <p key={idx}>{pub}</p>
            })}

        </React.Fragment>
    }
}