import {viewCompanies} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

//components import
import ExpandedCard from '../base/CardWithAvatar.js'
import PageTitle from '../base/Title.js'

import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class Career extends Component {
    componentDidMount(){
        this.props.viewCompanies();
    }
    render() {
        const { className, ...props } = this.props;
        const companies  = typeof this.props.companies!=='undefined' ? this.props.companies.map((company)=>{
            return <ExpandedCard title={company.title}
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
