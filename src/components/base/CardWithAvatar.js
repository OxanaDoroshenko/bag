import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import * as moment from 'moment'

const style={
    text:{
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'left',
    },
    cardConteiner:{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: '100%',
    },
    cardBlock:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left'
    },
    overlay:{
        cursor: 'pointer',
        textAlign: 'left'
    },
    media:{
      minHeight: '140px',
    },
}

export default class CardExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };
    openSite = (expanded) => {
        const siteUrl = this.props.companies[0].siteUrl;
        window.open(`${siteUrl}`);
    };

    handleExpand = () => {

        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };

    render() {
        const imgName = this.props.companies[0].img;
        const title = this.props.companies[0].title;
        const subtitle = this.props.companies[0].subtitle;
        const text = this.props.companies[0].text;
        const positions = this.props.companies.map((company)=>{
            const startWork = moment(company.time_start).format('MM.DD.YYYY');
            const endWork = moment(company.time_end).format('MM.DD.YYYY');
            return {
                interval: `${startWork} - ${endWork}`,
                positionName: company.position,
            }
        });
        const positionsList = positions.map((position)=>{
            return <div className="card__short-content"><span>{position.interval}</span><br></br><span>{position.positionName}</span></div>;
        });
        const logoImg = require(`../../images/companies/${imgName}.png`);
        return (
            <Card expanded={this.state.expanded}
                  onExpandChange={this.handleExpandChange}
                  containerStyle = {style.cardConteiner}>
                <CardHeader
                    className="card__header"
                    title={title}
                    subtitle={subtitle}
                    avatar={logoImg}
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={style.cardBlock}
                />
                <CardText className="card__short-title">
                    {positionsList}
                </CardText>
                <CardMedia
                    style={style.media}
                    expandable={true}
                    overlay={<CardTitle title={title}
                                        subtitle={subtitle}
                                        style={style.overlay}
                                        onClick={this.openSite}/>}>
                    <img src={logoImg} alt={subtitle} />
                </CardMedia>
                <CardText expandable={true} style={style.text}>
                    {text}
                </CardText>
                <CardActions style={style.cardBlock}>
                    <FlatButton label="Детальнее"
                                primary={true}
                                onClick={this.handleExpand}
                    />
                    <FlatButton label="Закрыть"
                                onClick={this.handleReduce}
                    />
                </CardActions>
            </Card>
        );
    }
}