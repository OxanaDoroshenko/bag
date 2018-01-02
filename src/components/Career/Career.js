import {viewCompanies} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

//components import
import ExpandedCard from '../base/CardWithAvatar.js'
import PageTitle from '../base/Title.js'
//helpers import
import groupBy from '../../helpers/Group';

import React, { Component } from 'react';

import classnames from 'classnames';

import './style.css';

class Career extends Component {
    componentDidMount(){
        this.props.viewCompanies();
    }
    render() {
        const { className, ...props } = this.props;
        const groupedCompanies  = typeof this.props.companies!=='undefined' ? groupBy(this.props.companies, 'title') : '';
        const companies  = typeof this.props.companies!=='undefined' ? Object.keys(groupedCompanies).map(function(key, index) {
            const companies = groupedCompanies[key];

            return <ExpandedCard title={key}
                                 companies = {companies}
                                 key={key}
            />;
        }): '';
        return (
            <div>
                <PageTitle text="Компании"/>
                <div className={classnames('carrier', className)}>
                    {companies}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        companies: state.companies.companies,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        viewCompanies: bindActionCreators(viewCompanies, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Career);
