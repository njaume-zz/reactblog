import React, {
  Component
} from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import { Link } from 'react-router-dom';

var Post = React.createClass({
  render() {
    return (

          <Card style={{}}>
            <CardTitle
              avatar="https://placeimg.com/80/80/animals"
              title={this.props.post.title}
              subtitle={this.props.post.created_at}
              />
              <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
                />
                <CardText>{this.props.post.introduction}</CardText>
                <Link to={'/' + this.props.post._id}>Leer Post Completo</Link>
          </Card>

    );
  }
});

export default Post
