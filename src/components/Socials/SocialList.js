import React from 'react';

import './style.css';

const style={
    toolbar:{
        minHeight: '56px',
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        lineHeight: '17px',
        textAlign: 'left',
    }
}

export default class ToolbarExamplesSimple extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="social">
                <a href="https://github.com/OxanaDoroshenko">
                    <span className="social__item github"></span>
                </a>
                <a href="https://twitter.com/doroshenkooxana">
                    <span className="social__item twitter"></span>
                </a>
                <a href="https://www.instagram.com/oxana_fox_doroshenko/?hl=ru">
                    <span className="social__item instagram"></span>
                </a>
            </div>
        );
    }
}