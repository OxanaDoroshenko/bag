//Light Blue Color schema based on lightBlue200 color
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {yellow800} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: yellow800,
        primary2Color: '#ffd95a',
        primary3Color: '#c17900',
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