import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={title} onChange={this.handleChange} />
          <input type="submit" value="Add to todo list" />
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = (event) => {
    const { addTodo } = this.props;
    // submitした際の画面遷移を抑止する
    event.preventDefault();
    addTodo(this.state.title);
    this.setState({ title: "" });
  };
}
