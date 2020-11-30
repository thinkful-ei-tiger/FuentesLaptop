import React, {Component} from 'react'
import Selected from './Selected'

class Customize extends Component{
    render(){
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Selected 
                features={this.props.features}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature} />
            </form>
        )
    }
}

export default Customize