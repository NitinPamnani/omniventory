import React from 'react';
import {Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

class Header extends React.Component {

    state = {}

    handleItemClick = (e, {name}) => this.setState({
        activeItem:name
    })

    render() {
        const {activeItem} = this.state
        return (
            <div>
            <Menu>
                <Menu.Item header
                    name='companyMastHead'
                    active={activeItem === 'companyMastHead'}
                    //onClick={this.handleItemClick}
                >
                    ABC CORPS INVENTORY MANAGEMENT
                </Menu.Item>
            </Menu>
            </div>
        )
    }
}

export default Header;