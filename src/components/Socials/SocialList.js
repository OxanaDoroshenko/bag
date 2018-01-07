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
                <a href="https://www.instagram.com/oxana_fox_doroshenko/?hl=ru"><span className="social__item instagram"></span></a>
                <a href="https://vk.com/id23210934"><span className="social__item vk"></span></a>
                <a href="https://twitter.com/doroshenkooxana"><span className="social__item twitter"></span></a>
            </div>
        );
    }
}