import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectTrainer from "./SelectTrainer"
import _difference from "lodash/difference"


class SelectTrainerContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {title: ''}

        this.submitTitle = this.submitTitle.bind(this)
        this.selectTitle = this.selectTitle.bind(this)
        this.titleInputChange = this.titleInputChange.bind(this)
    }

    submitTitle(title, event) {
        event.preventDefault()
        this.selectTitle(title)
    }

    selectTitle(title) {
        if (title === '') {
            return
        }
        this.props.onStartTrainer(title)
    }

    titleInputChange(event) {
        this.setState({title: event.target.value})
    }

    autocompleteOwn() {
        if (this.state.title.length < 1) {
            return []
        }
        let reg = new RegExp("(^|\\s)" + this.state.title, 'i')
        return this.props.ownTrainers.filter(item => item.match(reg))
    }

    autocompleteAll() {
        if (this.state.title.length < 1) {
            return []
        }
        let reg = new RegExp("(^|\\s)" + this.state.title, 'i')
        return this.props.allTrainers.filter(item => item.match(reg))
    }

    render() {
        const ownTrainersAutocomplete = this.autocompleteOwn()
        const allTrainersAutocomplete = this.autocompleteAll()

        return (
            <SelectTrainer
                submitTitle={this.submitTitle}
                selectTitle={this.selectTitle}
                titleInputChange={this.titleInputChange}
                ownTrainersAutocomplete={ownTrainersAutocomplete}
                allTrainersAutocomplete={allTrainersAutocomplete}
                ownTrainers={this.props.ownTrainers}
            />
        )
    }
}


const mapStateToProps = function (state) {
    return {
        ownTrainers: state.trainHistory.ownTrainers,
        allTrainers: _difference(state.allTrainers, state.trainHistory.ownTrainers)
    }
}

export default connect(mapStateToProps)(SelectTrainerContainer)