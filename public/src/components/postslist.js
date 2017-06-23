var TodoBox = React.createClass({
  loadTodoList: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
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
    this.loadTodoList();
    setInterval(this.loadTodoList, 2000);
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
