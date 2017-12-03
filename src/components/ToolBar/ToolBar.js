import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import {blue900} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import Menu from '../../components/Menu/Menu';


import './style.css';

export default class ToolbarExamplesSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({value});
    }

    render() {
        const menuItems = this.props.items;
        return (

            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <div className="system-title">
                        <div className="system-title__logo"></div>
                    </div>
                </ToolbarGroup>
                <ToolbarGroup>
                    {/*<Menu items={menuItems}/>*/}
                    <FontIcon className="muidocs-icon-custom-sort"/>
                    <ToolbarSeparator />
                    <Subheader style={{width: 'auto'}}>
                        <span>Фронтенд-разработчик</span>
                        <a href="#">Дорошенко Оксана Александровна</a>
                    </Subheader>
                    <Divider/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}