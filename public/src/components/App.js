import React, {
  Component
} from 'react';
//import logo from '../logo.svg';
//import '../css/App.css';
import axios from 'axios';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import {Tab, Tabs} from 'react-toolbox';
import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';

const GithubIcon = () => (
  <svg viewBox="0 0 284 277">
    <g><path d="M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555" /></g>
  </svg>
);


class App extends Component {
  render() {
    const dbHost = http://104.236.93.195:3000/posts;

    return (
      <div className="blogBody">
      <AppBar title='Genosha Blog' rightIcon={<GithubIcon />}>
        <Navigation type='horizontal'>
          <Link href='http://' label='Inbox' />
          <Link href='http://' active label='Profile' />
        </Navigation>
      </AppBar>
      <TabsSection dbHost={dbHost} />
      </div>
    );
  }
}


class TabsSection extends React.Component {
  componentDidMount(){
  this.loadPostList()
  //setInterval(this.loadPostList, 2000);
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
  axios.get(this.props.dbHost)
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



var PostList = React.createClass({

      render: function() {

        let p = [];
        if (this.props.posts.length > 0)
         {
           console.log("PostList - posts" + JSON.stringify(this.props.posts));
           p = this.props.posts.map(function(post, i) {
              return (<div style={{'margin': 'auto', 'padding':'20px 20px 20px 20px', width: '25%', float: 'left'}}>
                        <Post key={post._id.toString()} title={post.title} body={post.body} />
                        </div>
                        );
              })
          }
        return (<div className="postes">{p}</div>);
        }
      });

class PostForm extends React.Component {
        constructor(props) {
        super(props);
        this.state = {postTitle: "", postBody: ""};

        this.handleChangePostTitle = this.handleChangePostTitle.bind(this);
        this.handleChangePostBody = this.handleChangePostBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChangePostTitle() {
        console.log("event target value " + document.getElementById('postTitle').value);
        this.setState({postTitle: document.getElementById('postTitle').value});
      }

      handleChangePostBody() {
        console.log("event target value " + document.getElementById('postBody').value);
        this.setState({postBody: document.getElementById('postBody').value});
      }

      handleSubmit(event) {
          event.preventDefault();
          let post = {
            'title': this.state.postTitle,
            'body': this.state.postBody,
            'created_at': new Date()
          };
          this.props.onPostChange(post);
/*
          axios.post('/posts', post)
            .then(function (post) {
              console.log('A post was submitted: ' + post);
              addPost(post);
            })
            .catch(function (error) {
              console.log(error);
            });
            */
      };


        render () {
          return (
            <section>
            <form onSubmit={this.handleSubmit}>
            <label>Post Title</label>
              <Input type='text' id="postTitle" name='postTitle' value={this.state.postTitle} onChange={this.handleChangePostTitle} maxLength={100} />
              <label>Post Body</label>
              <Input type='text' name='postBody' id="postBody" value={this.state.postBody} multiline maxLength={200} onChange={this.handleChangePostBody}  />
              <Button type="submit" label="add!" floating />
              </form>
            </section>
          );
        }
      }


    export default App;
