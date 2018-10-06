import React from 'react'
import TrainHistoryList from "./TrainHistoryList"

const TrainHistory = (props) => {
    let message
    if (props.trainHistory.historyIsLoaded && props.trainHistory.items.length === 0) {
        message = 'Здесь будет отображаться история ваших тренировок.'
    }
    if (props.trainHistory.historyIsLoading) {
        message = 'История загружается...'
    }
    const showList = !message

    return (
        <div>
            <h1>История тренировок:</h1>
            {showList
                ? <TrainHistoryList items={props.trainHistory.items}/>
                : <div className="light-text">{message}</div>
            }
        </div>
    )
}

export default TrainHistory