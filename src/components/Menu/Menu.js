import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ColorScheme from '../../colorsSchemes/ColorSchemaDarkBlue.js';
import {green900} from 'material-ui/styles/colors';

require('./_style.css');

let style = {
    list:{
        // width: '160px',
    },
    listItem: {
    },
    icon:{
        color: green900,
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
                <List
                      value={this.state.index}
                      style={style.list}
                      onChange={this.handleClick}>
                    {menuItems.map((item, key) => {
                         return <Link to={item.url}
                                      className="menu__list-item"
                                      key={key}
                                      title={item.name}>
                            <ListItem
                                value={key}
                                innerDivStyle = {style.listItem}
                                primaryText={item.name}
                                leftIcon={
                                    <FontIcon className="material-icons"
                                              style={style.icon}>
                                        {item.icon}
                                    </FontIcon>
                                }
                            />
                        </Link>;
                    })}
                </List>
        );
    }
}
