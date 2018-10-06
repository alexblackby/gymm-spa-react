import React, { Component } from 'react';
import UserMenuContainer from "./common/UserMenuContainer";
import TrainHistoryContainer from "./trainHistory/TrainHistoryContainer";

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <div className="app-header">
                    <div className="app-header-logo">gymm</div>
                    <UserMenuContainer />
                    <div className="clear" />
                </div>
                <TrainHistoryContainer />
            </div>
        );
    }
}

export default HomeScreen;