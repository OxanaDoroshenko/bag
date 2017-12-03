import ToolBar from '../../components/ToolBar/ToolBar';
import Career from '../../components/Career/Career';

import React, {Component} from 'react';
import classnames from 'classnames';
// import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './style.css';

// import UploadStatusBar from '../components/SnackbarBase/SnackbarBase';
// import FooterNotification from '../components/Notification/Notification'
// import CircularLoader from '../components/CircularProgress/CircularProgress';
// import DeleteDialog from '../components/BaseDialog/DeleteDialog';
// import EditDialog from '../components/BaseDialog/EditDialog';

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

// const MenuItem = function(code, props = {}) {
//     const MenuComponent = menuItems[code].component;
//     return <MenuComponent children={props[code]} />;
// };



class App extends Component {
    constructor(props){
        super(props);
        this.state = { menu: this.props.menu };
    }

    componentDidMount() {
        // TODO write role model logic from menu server data
        // fetch('menu/api')
        //     .then(res => res.json())
        //     .then(menuItems => {
        //         this.setState({menuItems})
        //     })
        // this.setState(menu);
    }
    render() {
        const {className, ...props} = this.props;
        // const items = menuItems.filter((item) => this.state.menu[item.code]);
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
                    {/*<UploadStatusBar/>*/}
                    {/*<FooterNotification/>*/}
                    {/*<CircularLoader/>*/}
                    {/*<DeleteDialog/>*/}
                    {/*<EditDialog/>*/}
                </div>
            </Router>
            </MuiThemeProvider>

        )
    }
}
//
// class App extends Component {
//     render() {
//
//         console.log(props);
//         return (
//             <div >
//                 <div className="App-header">
//                     <img src={logo} className="App-logo" alt="logo"/>
//                     <h2>Welcome to React - Fullstack!</h2>
//                 </div>
//                 <p className="App-intro">
//                     To get started, edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <Link to='about'>
//                     <button>Test React Router</button>
//                 </Link>
//                 <br />
//                 <br />
//                 <button onClick={this.props.actions.expressTest}>Test if Express is working</button>
//                 <br />
//                 <br />
//                 <button onClick={this.props.actions.dbTest}>Test if Express and Sequelize are working</button>
//                 <div style={{padding: '30px'}}>{this.props.results}</div>
//             </div>
//         );
//     }
// }

export default App;
