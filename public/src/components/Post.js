import React, {
  Component
} from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';

var Post = React.createClass({
  render() {
    return (

          <Card style={{}}>
            <CardTitle
              avatar="https://placeimg.com/80/80/animals"
              title={this.props.title}
              subtitle={this.props.title}
              />
              <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
                />
                <CardText>{this.props.body}</CardText>
          </Card>

    );
  }
});
