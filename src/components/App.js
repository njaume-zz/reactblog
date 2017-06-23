import React, {
  Component
} from 'react';
//import logo from '../logo.svg';
import '../css/App.css';

class App extends Component {
  const dbHost = "localhost:3000/posts"
  render() {
    return ( < div className = "App" >
      <div className = "App-header">
      <h2> Blog </h2> </div>
      <p className = "App-intro" > To get started, edit < code > src / App.js < /code> and save to reload. </p>
      </div>
      <PostList url = {dbHost}/>
    );
  }
}


var Post = React.createClass({
  render() {
    return ( < div className = "post" >
      <div className = "title" >
      <h2> {this.props.title} </h2>
      </div>
      <p className = "body" > {this.props.body} </p>
      </div>
    );
  }
});

var PostList = React.createClass({
      loadPostList: function() {
        $.ajax({
          url: this.props.url,
          dataType: 'json',
          cache: false,
          success: function(posts) {
            this.setState({
              posts: posts
            });
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
      },

      getInitialState: function() {
        return {
          data: []
        };
      },

      componentDidMount: function() {
        this.loadPostList();
        //setInterval(this.loadPostList, 2000);
      },

      render: function() {
        var titles = '';
        if (this.state.posts) {
          titles = this.state.posts.map(function(post, i) {
              return ( <
                Post key = {
                  post.id
                }
                title = {
                  post.title
                }
                body = {
                  post.body
                }
                />
              );
            }
          }
        }
      });
    export default App;
