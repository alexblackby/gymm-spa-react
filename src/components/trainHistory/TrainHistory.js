import React, {Component} from 'react';
import utils from "../../utils/utils";
import dateFormat from "../../utils/dateFormats";
import {Button} from 'antd';
import 'antd/lib/button/style/css';
import TrainHistoryItem from "./TrainHistoryItem";
import createHistory from "history/createHashHistory";

class TrainHistory extends Component {

    constructor(props) {
        super(props)

        this.renderForm = this.renderForm.bind(this);
        this.renderHistory = this.renderHistory.bind(this);
    }

    clickStart() {
        const location = {
            pathname: '/current-train'
        }
        const history = createHistory()
        history.push(location)
    }

    renderForm() {
        const dateNow = dateFormat(utils.timeInSeconds(), 'weekdayFullMonth')
        return (<div className="form">
            <h1 className="form-header">{dateNow}</h1>
            <div>
                <Button type="primary" onClick={this.clickStart}>Начать тренировку</Button>
            </div>
        </div>)
    }

    renderHistory() {
        if(this.props.trainHistory.historyIsLoaded) {
            if(this.props.trainHistory.items.length===0) {
                return (
                    <div className="light-text">
                        Здесь будет отображаться история ваших тренировок.
                    </div>
                );
            } else {
                return this.props.trainHistory.items.map( item =>
                    <TrainHistoryItem item={item} key={item.id} />
                );
            }
        } else {
            return (
                <div className="history-loading white-text">
                    История загружается...
                </div>
            );
        }
    }

    render() {
        const Form = this.renderForm
        const History = this.renderHistory

        return (
            <div>
                <Form />
                <h1>История тренировок:</h1>
                <History/>
            </div>
        );
    }
}

export default TrainHistory;
