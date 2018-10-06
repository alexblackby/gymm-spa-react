import React from 'react'
import TrainHistoryItem from "./TrainHistoryItem"

const TrainHistoryList = (props) => {
    return (
        props.items.map(item =>
            <TrainHistoryItem item={item} key={item.id}/>
        )
    )
}

export default TrainHistoryList