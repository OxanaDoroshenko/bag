import React from 'react';
import FontIcon from 'material-ui/FontIcon';


import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';



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