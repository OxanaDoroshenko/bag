import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import classnames from 'classnames';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ColorScheme from '../../colorsSchemes/ColorSchemaGreen.js';

import ToolBar from '../../components/ToolBar/ToolBar';
//content components
import Career from '../../components/Career/Career';
import Projects from '../../components/Projects/Projects';
import Skills from '../Skills/Skills';
import Education from '../../components/Education/Education';
import Interests from '../../components/Interests/Interests';

import Menu from '../../components/Menu/Menu';

import './style.css';
import './media.css';

import navImg from './nav.jpg';


const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const menuItems = [
    {
        name: 'Career',
        code: 'career',
        icon: 'trending_up',
        url: '/career',
        component: Career
    },
    {
        name: 'Skills',
        code: 'career',
        icon: 'gps_fixed',
        url: '/skills',
        component: Skills
    },
    {
        name: 'Projects',
        code: 'projects',
        icon: 'work',
        url: '/projects',
        component: Projects
    },
    {
        name: 'Education',
        code: 'education',
        icon: 'account_balance',
        url: '/education',
        component: Education
    },
    {
        name: 'Interests',
        code: 'interests',
        icon: 'fitness_center',
        url: '/interests',
        component: Interests
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
            marginLeft: this.props.app.activeNav ? '0' : '-300px',
            background: `url(${navImg}) no-repeat`,
            backgroundSize: '100px',
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
                                    <Route path="/projects" exact component={Projects}/>
                                    <Route path="/skills" exact component={Skills}/>
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
