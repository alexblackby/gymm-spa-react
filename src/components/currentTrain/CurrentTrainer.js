import React, {Component} from 'react'
import SliderWithInput from "../common/SliderWithInput"

class CurrentTrainer extends Component {
    render() {
        const props = this.props
        return (
            <div>
                <div className="set-form form">
                    <h1 className="form-header">{props.currentTrainer.title}</h1>
                    Вес:
                    <SliderWithInput/>
                    Повторения:
                    <SliderWithInput/>
                </div>
            </div>
        )
    }
}

export default CurrentTrainer