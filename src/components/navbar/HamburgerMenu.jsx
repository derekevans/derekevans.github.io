
import React from 'react'

export default class HamburgerMenu extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            active: this.props.active,
            moved: this.props.active,
            rotated: this.props.active
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleTransitionEnd = this.handleTransitionEnd.bind(this)
    }

    render() {
        return <div className="hamburger-container" onClick={this.handleClick}>
            <div className="hamburger">

                <span className="top-line" style={{
                    top: this.state.moved ? '10px' : '0px',
                    transform: this.state.rotated ? 'rotate(45deg)' : 'rotate(0deg)'
                }} onTransitionEnd={this.handleTransitionEnd}/>

                <span className="mid-line" style={{
                    visibility: this.state.moved ? 'hidden' : 'visible'
                }}/>

                <span className="bottom-line" style={{
                    top: this.state.moved ? '10px' : '20px',
                    transform: this.state.rotated ? 'rotate(-45deg)' : 'rotate(0deg)'
                }}/>
                
            </div>
        </div>
    }

    handleClick() {
        this.setState({active: ! this.state.active}, () => {
            if (this.state.active) {
                this.toggleMoved()
            } else {
                this.toggleRotated()
            }
            this.props.onClick(this.state.active)
        })
    }

    toggleMoved() {
        this.setState({moved: ! this.state.moved})
    }

    toggleRotated() {
        this.setState({rotated: ! this.state.rotated})
    }

    handleTransitionEnd(event) {
        event.preventDefault()
        event.stopPropagation()
        
        if (this.inTransition() && this.state.active) {
            this.toggleRotated()
        } else if (this.inTransition() && ! this.state.active) {
            this.toggleMoved()
        }
    }

    inTransition() {
        return this.state.moved !== this.state.rotated
    }

}