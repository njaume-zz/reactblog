import React, { Component } from 'react';

var PostList = React.createClass({
  loadPostList: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(posts) {
        this.setState({posts: posts});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadPostList();
    setInterval(this.loadPostList, 2000);
  },

  render: function() {
    return (
      <div className="todo-box">
        <h1>Todo List</h1>
        <TodoList data={this.state.data} />
        <TodoForm />
      </div>
    );
  }
});
