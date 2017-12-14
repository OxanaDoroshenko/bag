// src/components/About/index.js
import {viewCompanies} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class Career extends Component {
    componentDidMount(){
        debugger;
        this.props.viewCompanies();
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

function mapStateToProps(state) {
    return {
        companies: state.companies.results,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewCompanies: bindActionCreators(viewCompanies, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Career);
