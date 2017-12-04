// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class About extends Component {
    componentDidMount(){
        this.props.actions.viewCompanies();
    }
    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('About', className)}>
                <h1>
                    React Router working!
                </h1>
            </div>
        );
    }
}
