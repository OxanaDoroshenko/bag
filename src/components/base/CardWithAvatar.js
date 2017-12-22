import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

const style={
    text:{
        display: 'flex',
        justifyContent: 'space-around',
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

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
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
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    avatar={logoImg}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>
                    {/*<Toggle*/}
                        {/*toggled={this.state.expanded}*/}
                        {/*onToggle={this.handleToggle}*/}
                        {/*labelPosition="right"*/}
                        {/*label="This toggle controls the expanded state of the component."*/}
                    {/*/>*/}
                </CardText>
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle title={this.props.title} subtitle={this.props.subtitle} />}>
                    <img src={logoImg} alt="" />
                </CardMedia>
                {/*<CardTitle title={this.props.title} subtitle={this.props.subtitle} expandable={true} />*/}
                <CardText expandable={true} style={style.text}>
                    {this.props.text}
                </CardText>
                <CardActions>
                    <FlatButton label="Детальнее" onClick={this.handleExpand} />
                    <FlatButton label="Закрыть" onClick={this.handleReduce} />
                </CardActions>
            </Card>
        );
    }
}