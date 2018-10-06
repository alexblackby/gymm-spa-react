import React from 'react';
import UserMenuContainer from "./UserMenuContainer";

const DefaultHeader = (props) => {
    return (
        <div className="app-header">
            <div className="app-header-logo">gymm</div>
            <UserMenuContainer/>
            <div className="clear"/>
        </div>
    )
}

export default DefaultHeader