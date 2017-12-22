import {viewCompanies} from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

//components import
import ExpandedCard from '../base/CardWithAvatar.js'

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
                                 imgName={company.img}
                                 text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'/>;
        }): '';
        return (
            <div className={classnames('carrier', className)}>
                {companies}
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
