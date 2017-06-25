import React, {
  Component
} from 'react';
import Input from 'react-toolbox/lib/input';
import {Button, IconButton} from 'react-toolbox/lib/button';

class PostForm extends React.Component {
        constructor(props) {
        super(props);
        this.state = {postTitle: "", postIntroduction:"", postBody: ""};

        this.handleChangePostTitle = this.handleChangePostTitle.bind(this);
        this.handleChangePostBody = this.handleChangePostBody.bind(this);
        this.handleChangePostIntroduction = this.handleChangePostIntroduction.bind(this);
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

      handleChangePostIntroduction() {
        console.log("event target value " + document.getElementById('postIntroduction').value);
        this.setState({postIntroduction: document.getElementById('postIntroduction').value});
      }


      handleSubmit(event) {
          event.preventDefault();
          let post = {
            'title': this.state.postTitle,
            'introduction': this.state.postIntroduction,
            'body': this.state.postBody,
            'created_at': new Date()
          };
          this.props.onPostChange(post);

      };


        render () {
          return (
            <section>
            <form onSubmit={this.handleSubmit}>
            <label>Post Title</label>
              <Input type='text' id="postTitle" name='postTitle' value={this.state.postTitle} onChange={this.handleChangePostTitle} maxLength={100} />
              <label>Post introduction</label>
              <Input type='text' name='postIntroduction' id="postIntroduction" value={this.state.postInstroduction} multiline maxLength={1000} onChange={this.handleChangePostIntroduction}  />
              <label>Post Body</label>
              <Input type='text' name='postBody' id="postBody" value={this.state.postBody} multiline maxLength={1000} onChange={this.handleChangePostBody}  />
              <label>Post Image</label>
              <Input type="file" id="postImage" name="postImage" accept="image/*" />
              <Button type="submit" label="add!" floating />
              </form>
            </section>
          );
        }
      }

export default PostForm;
