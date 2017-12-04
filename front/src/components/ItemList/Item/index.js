import React from "react";
import Item from "./Item.js";
import {connect} from "react-redux";
import {upVoteItem, downVoteItem, deleteItem} from "../../../actions"

class ItemContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      content: this.props.data.content,
      image: this.props.data.image,
      contentLink: this.props.data.contentLink
    }
    this.upVoter = this.upVoter.bind(this);
    this.downVoter = this.downVoter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  upVoter(e) {
    e.preventDefault();
    this.props.upVoteItem(this.props.data._id)
  }
  downVoter(e) {
    e.preventDefault();
    this.props.downVoteItem(this.props.data._id)
  }
  handleDelete() {
    this.props.deleteItem(this.props.data._id)
  }
  render() {
    return (
      <Item {...this.state} {...this.props} handleDelete={this.handleDelete} upVoter={this.upVoter} downVoter={this.downVoter}/>
    )
  }
}

export default connect(null, {upVoteItem, downVoteItem, deleteItem})(ItemContainer);
