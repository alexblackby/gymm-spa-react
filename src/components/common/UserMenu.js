import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import 'antd/lib/dropdown/style/css'
import 'antd/lib/menu/style/css'

class UserMenu extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item disabled={true}>
                    {this.props.userEmail}
                </Menu.Item>
                <Menu.Item>
                    Настройки
                </Menu.Item>
                <Menu.Item>
                    Выйти
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="user-menu">
                <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
                    <div className="user-menu-button">
                        <div className="user-menu-image"></div>
                    </div>
                </Dropdown>
            </div>
        );
    }
}

export default UserMenu;