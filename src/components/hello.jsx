import React, { Component } from "react";
import PropTypes from "prop-types";

class Hello extends Component {
  render() {
    return <div>Hello {this.props.name}, how are you?</div>;
  }
}

Hello.proptypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
