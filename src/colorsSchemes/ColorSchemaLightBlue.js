import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {lightBlue200} from 'material-ui/styles/colors';
import {lightBlue800} from 'material-ui/styles/colors';
import {brown200} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: lightBlue200,
        primary2Color: lightBlue800,
        primary3Color: brown200,
    },
}, {
    avatar: {
        borderColor: null,
    },
    userAgent: 'all',
});

export default muiTheme;