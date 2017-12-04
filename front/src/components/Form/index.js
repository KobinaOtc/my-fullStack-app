import React from "react";
import Form from "./Form.js";
import {connect} from "react-redux";
import {addItem} from "../../actions";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      image: "",
      contentLink: "",
      content: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    e.persist();
    this.setState((prevState) => ({
      [e.target.name]: e.target.value
    }))
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.title, this.state.content, this.state.image, this.state.contentLink);
    this.setState((prevState) => ({
      title: "",
      image: "",
      contentLink: "",
      content: ""
    }))
  }
  render() {
    return (
      <div>
        <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default connect(null, {addItem})(FormContainer);
