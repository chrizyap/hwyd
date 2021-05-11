import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const options = [{ key: "Anonymous", text: "Anonymous", value: "Anonymous" }];

class DropdownExampleAllowAdditions extends Component {
  state = { options };

  handleAddition = (e, { value }) => {
    this.setState((prevState) => ({
      options: [{ text: value, value }, ...prevState.options],
    }));
  };

  handleChange = (e, { value }) => this.setState({ currentValue: value });

  render() {
    const { currentValue } = this.state;

    return (
      <Dropdown
        options={this.state.options}
        placeholder="Name"
        search
        selection
        fluid
        allowAdditions
        value={currentValue}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    );
  }
}

export default DropdownExampleAllowAdditions;
