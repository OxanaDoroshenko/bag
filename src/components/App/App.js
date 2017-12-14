import ToolBar from '../../components/ToolBar/ToolBar';
import Career from '../../components/Career/Career';

import React, {Component} from 'react';
import classnames from 'classnames';
// import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './style.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ColorScheme from '../../colorsSchemes/ColorSchemaDarkBlue.js';

import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const menuItems = [
    {
        name: 'Карьера',
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
        return (
            <MuiThemeProvider muiTheme={ColorScheme}>
            <Router>
                <div className={classnames('App', className)}>
                    <ToolBar items={menuItems}/>
                    <div className="page__container__content">
                        <div className="container__content">
                            <Route path="/" exact component={Career}/>
                            <Route path="/career" exact component={Career}/>
                        </div>
                    </div>
                    <button onClick={this.props.actions.expressTest}>Test if Express is working</button>
                    <br />
                    <br />
                    <button onClick={this.props.actions.dbTest}>Test if Express and Sequelize are working</button>
                </div>
            </Router>
            </MuiThemeProvider>

        )
    }
}

export default App;
