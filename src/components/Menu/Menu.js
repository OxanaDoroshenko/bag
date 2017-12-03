import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import {blue900} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ColorScheme from '../../colorsSchemes/ColorSchemaDarkBlue.js';

require('./_style.scss');

let style = {
    display: 'inline-flex',
    margin: '0',
    height: 'calc(100vh - 50px)',
    zIndex: 1500,
    listItem: {
        padding: 0,
        minHeight: 48,
        minWidth: 48
    }
};

export default class SysMenu extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            index: 0
        }
    }
    componentDidMount(){
    }
    handleClick(){
        //TODO higlight active menu item via select MenuItem component
    }
    render() {
        const menuItems = this.props.items;
        return (
            <Paper style={style} zDepth={2}>
                <List
                      value={this.state.index}
                      onChange={this.handleClick}>
                    {menuItems.map((item, key) => {
                         return <Link to={item.url} className="menu__list-item" key={key} title={item.name}>
                            <ListItem
                                value={key}
                                innerDivStyle = {style.listItem}
                                primaryText=""
                                rightIcon={
                                    <FontIcon className="material-icons"
                                              style={{color: blue900, right: 0}}>
                                        {item.icon}
                                    </FontIcon>
                                }
                            />
                        </Link>;
                    })}
                </List>
            </Paper>
        );
    }
}
