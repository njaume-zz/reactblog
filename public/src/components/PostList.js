import React, {
  Component
} from 'react';
import {Tab, Tabs} from 'react-toolbox';
import Post from './Post.js';

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

export default PostList;
