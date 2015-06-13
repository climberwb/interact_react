var MessageComponent = React.createClass({displayName: "MessageComponent",
  render: function() {
    return (
      React.createElement("div", null, this.props.message)
    );
  }
});

// Render an instance of MessageComponent into document.body
React.render(
  React.createElement(MessageComponent, {message: "Hello!"}),
  document.body
);