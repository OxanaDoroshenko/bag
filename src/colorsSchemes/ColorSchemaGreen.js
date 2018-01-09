//Light Blue Color schema based on lightBlue200 color
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green900} from 'material-ui/styles/colors';
import {grey900} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#4c8c4a',
        primary2Color: green900,
        primary3Color: '#003300',
    },
}, {
    avatar: {
        borderColor: null,
    },
    // On the client side, the default value is navigator.userAgent.
    // But on the server side, the navigator is undefined. You need to provide it to Material-UI
    userAgent: 'all',
});

export default muiTheme;