import React from 'react';
import FontIcon from 'material-ui/FontIcon';


import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Subheader from 'material-ui/Subheader';
import Socials from '../../components/Socials/SocialList';

import './style.css';

const style={
    toolbar:{
        minHeight: '56px',
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        lineHeight: '17px',
        textAlign: 'left',
    }
}

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

            <Toolbar style={style.toolbar}>
                <ToolbarGroup firstChild={true}>
                    <div className="system-title">
                        <div className="system-title__logo"></div>
                    </div>
                </ToolbarGroup>
                <ToolbarGroup>
                    {/*<Menu items={menuItems}/>*/}
                    <FontIcon className="muidocs-icon-custom-sort"/>
                    <ToolbarSeparator />
                    <Subheader style={style.profile}>
                        <span className="profile__position">Frontend-chef</span>
                        <a href="#" className="profile__name">Оксана Дорошенко</a>
                    </Subheader>
                    <ToolbarSeparator />
                    <Socials/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}