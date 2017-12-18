import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

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
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar={logoImg}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>
                    <Toggle
                        toggled={this.state.expanded}
                        onToggle={this.handleToggle}
                        labelPosition="right"
                        label="This toggle controls the expanded state of the component."
                    />
                </CardText>
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
                    <img src={logoImg} alt="" />
                </CardMedia>
                <CardTitle title={this.props.title} subtitle={this.props.subtitle} expandable={true} />
                <CardText expandable={true}>
                    {this.props.text}
                </CardText>
                <CardActions>
                    <FlatButton label="Expand" onClick={this.handleExpand} />
                    <FlatButton label="Reduce" onClick={this.handleReduce} />
                </CardActions>
            </Card>
        );
    }
}