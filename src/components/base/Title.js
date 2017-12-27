import React from 'react';

const style = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: '7px',
    paddingTop: '0px',
    letterSpacing: '0px',
    fontSize: '24px',
    fontWeight: '400',
    textAlign: 'left',
    height: '64px',
    lineHeight: '64px',
    flex: '1 1 0%',
};

export default class PageTitle extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div style={style}>
                <span>{this.props.text}</span>
            </div>
        );
    }
}