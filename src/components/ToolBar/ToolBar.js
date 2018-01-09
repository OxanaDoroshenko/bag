import React from 'react';
import FontIcon from 'material-ui/FontIcon';

import * as appActions from '../../actions/appActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ActionMenu from 'material-ui/svg-icons/navigation/menu';
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

class ToolbarHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeNav: false,
            value: 3,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({value});
    }

    render() {
        return (
            <Paper zDepth={2}>
                    <Toolbar style={style.toolbar}>
                        <ToolbarGroup firstChild={true}>
                            <div className="system-title">
                                <IconButton tooltip="Navigation" onClick = {()=>{this.props.appActions.toggleNav()}}>
                                    <ActionMenu/>
                                </IconButton>
                            </div>
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <FontIcon className="muidocs-icon-custom-sort"/>
                            <Subheader style={style.profile}>
                                <span className="profile__position">Frontend-chef</span>
                                <a href="#" className="profile__name">Оксана Дорошенко</a>
                            </Subheader>
                            <ToolbarSeparator />
                            <Socials/>
                        </ToolbarGroup>
                    </Toolbar>
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        app: state.app,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appActions: bindActionCreators(appActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarHeader);