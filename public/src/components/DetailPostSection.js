import React, {
  Component
} from 'react';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import axios from 'axios';

class DetailPostSection extends React.Component {

  componentDidMount(){
  this.loadPost()
  }

  constructor(props) {
  super(props);
  this.state = {
    post: {},
  };

}
  loadPost = function() {
  console.log("loading post  " + this.props.match.params.postId);
  axios.get('/posts/' + this.props.match.params.postId)
  .then(res => {
    const post = res.data;
    this.setState({ post: post });
    console.log("Post - post" + JSON.stringify(this.state.post));
  });
}


  render() {
    return (

          <Card style={{}}>
            <CardTitle
              avatar="https://placeimg.com/80/80/animals"
              title={this.state.post.title}
              subtitle={this.state.post.introduction}
              />
              <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
                />
                <CardText>{this.state.post.body}</CardText>
          </Card>

    );
  }
};

export default DetailPostSection;
