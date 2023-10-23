import React from "react"
import Navbar from "../components/navbar/Navbar"
import About from "../components/about/About"

export default class ApplicationLayout extends React.Component {

    render() {
        return <React.Fragment>
            <Navbar/>
            { this.props.children }
            <About/>
          </React.Fragment>
      }
}