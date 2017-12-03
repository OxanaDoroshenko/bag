//Light Blue Color schema based on lightBlue200 color
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {lightBlue200} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: lightBlue200,
        primary2Color: '#b6ffff',
        primary3Color: '#4ba3c7',
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