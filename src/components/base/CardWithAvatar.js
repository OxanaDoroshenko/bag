import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style={
    text:{
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'left',
    },
    cardConteiner:{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
    },
    cardBlock:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left'
    }
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
        window.open(`${this.props.siteUrl}`);
    };

    handleExpand = () => {

        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };

    render() {
        let logoImg = require(`../../images/companies/${this.props.imgName}.png`);
        return (
            <Card expanded={this.state.expanded}
                  onExpandChange={this.handleExpandChange}
                  containerStyle = {style.cardConteiner}>
                <CardHeader
                    className="card__header"
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    avatar={logoImg}
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={style.cardBlock}
                />
                <CardText className="card__short-content">
                    Должность: {this.props.shortText}
                </CardText>
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle title={this.props.title} subtitle={this.props.subtitle} onClick={this.openSite}/>}>
                    <img src={logoImg} alt="" />
                </CardMedia>
                <CardTitle title={this.props.title} subtitle={this.props.subtitle} expandable={true} />
                <CardText expandable={true} style={style.text}>
                    {this.props.text}
                </CardText>
                <CardActions style={style.cardBlock}>
                    <FlatButton label="Детальнее" onClick={this.handleExpand} />
                    <FlatButton label="Закрыть" onClick={this.handleReduce} />
                </CardActions>
            </Card>
        );
    }
}