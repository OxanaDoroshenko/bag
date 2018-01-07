import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import React, {Component} from 'react';
import classnames from 'classnames';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ColorScheme from '../../colorsSchemes/ColorSchemaLightBlue.js';

import ToolBar from '../../components/ToolBar/ToolBar';
import Career from '../../components/Career/Career';

import './style.css';
import './media.css';


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
            <Router>
                <MuiThemeProvider muiTheme={ColorScheme}>

                <div className={classnames('App', className)}>
                    <ToolBar items={menuItems}/>
                    <div className="page__container__content">
                        <div className="container__content">
                            <Route path="/" exact component={Career}/>
                            <Route path="/career" exact component={Career}/>
                        </div>
                    </div>
                </div>
                </MuiThemeProvider>

            </Router>

        )
    }
}

export default App;
