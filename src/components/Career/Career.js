import {viewCompanies} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

//components import
import ExpandedCard from '../base/CardWithAvatar.js'
import PageTitle from '../base/Title.js'

import React, { Component } from 'react';
import * as moment from 'moment'
import classnames from 'classnames';

import './style.css';

class Career extends Component {
    componentDidMount(){
        this.props.viewCompanies();
    }
    render() {
        const { className, ...props } = this.props;
        const companies  = typeof this.props.companies!=='undefined' ? this.props.companies.map((company)=>{
            const startWork = moment(company.time_start).format('MM.DD.YYYY');
            const endWork = moment(company.time_end).format('MM.DD.YYYY');
            const workInterval = `${startWork} - ${endWork}`;
            return <ExpandedCard title={company.title}
                                 subtitle={company.subtitle}
                                 shortText = {company.position}
                                 totalText = {workInterval}
                                 key={company.title}
                                 imgName={company.img}
                                 siteUrl={company.siteUrl}
                                 text={company.text}/>;
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
