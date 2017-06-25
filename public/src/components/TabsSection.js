import React, {
  Component
} from 'react';
import {Tab, Tabs} from 'react-toolbox';
import PostList from './PostList.js';
import PostForm from './PostForm.js';
import axios from 'axios';

class TabsSection extends React.Component {
  componentDidMount(){
  this.loadPostList()
  }

  constructor(props) {
  super(props);
  this.state = {
    posts: {},
    index: 1,
    fixedIndex: 1,
    inverseIndex: 1
  };

  this.onPostChange = this.onPostChange.bind(this);
}
  loadPostList = function() {
  console.log("loading posts");
  axios.get("/posts")
  .then(res => {
    const posts = res.data;
    this.setState({ posts: posts });
    console.log("postsss" + this.state.posts);
  });
}

  handleTabChange = (index) => {
    this.setState({index});
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  handleInverseTabChange = (index) => {
    this.setState({inverseIndex: index});
  };

  handleActive = () => {
    console.log('Special one activated');
  };

  onPostChange = (newPost) =>{
    var self = this;
    console.log("onPostChange - post" + JSON.stringify(newPost));
    axios.post('/posts', newPost)
      .then(function (response) {
        const post = response.data;
        self.state.posts.push(post);
        const nexPostState = self.state.posts;
        console.log("nexPostState  -  " + JSON.stringify(nexPostState));
        self.setState({ posts:  nexPostState});
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render () {
    return (
      <section>
        <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label='postSection'><small><PostList posts={this.state.posts} /></small></Tab>
          <Tab label='formSection'><small><PostForm onPostChange={this.onPostChange}/></small></Tab>
        </Tabs>
      </section>
    );
  }
}

export default TabsSection;
