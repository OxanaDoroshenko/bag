import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import classnames from 'classnames';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ColorScheme from '../../colorsSchemes/ColorSchemaLightBlue.js';

import ToolBar from '../../components/ToolBar/ToolBar';
import Career from '../../components/Career/Career';
import Menu from '../../components/Menu/Menu';

import './style.css';
import './media.css';


const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const menuItems = [
    {
        name: 'Career',
        code: 'career',
        icon: 'settings',
        url: '/career',
        component: Career
    },
    {
        name: 'Skills',
        code: 'career',
        icon: 'settings',
        url: '/career',
        component: Career
    },
    {
        name: 'Education',
        code: 'career',
        icon: 'settings',
        url: '/career',
        component: Career
    },
    {
        name: 'Interests',
        code: 'career',
        icon: 'settings',
        url: '/career',
        component: Career
    },
];

class App extends Component {
    constructor(props){
        super(props);
        this.state = { menu: this.props.menu };
    }
    render() {
        const {className, ...props} = this.props;
        const navStyle = {
            display: this.props.app.activeNav ? 'flex' : 'none',
        };
        return (
            <Router>
                <MuiThemeProvider muiTheme={ColorScheme}>
                    <div className={classnames('App', className)}>
                        <ToolBar/>
                        <div className="page__body">
                            <Paper zDepth={1}>
                                <div className="page__container__navigation" style={navStyle}>
                                    <Menu items={menuItems}/>
                                </div>
                            </Paper>
                            <div className="page__container__content">
                                <div className="container__content">
                                    <Route path="/" exact component={Career}/>
                                    <Route path="/career" exact component={Career}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
            </Router>

        )
    }
}

export default App;
