//Light Blue Color schema based on lightBlue200 color
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {brown900} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: brown900,
        primary2Color: '#6a4f4b',
        primary3Color: '#1b0000',
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