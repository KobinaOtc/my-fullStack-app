import React from "react";
import ItemList from "./ItemList.js";
import {connect} from "react-redux";
import {loadItems} from "../../actions";

class ItemListContainer extends React.Component {
  componentDidMount() {
    this.props.loadItems()
  }
  render() {
    return (
      <div>
        <ItemList data={this.props.items} />
      </div>
    )
  }
}

export default connect((state) => state, {loadItems})(ItemListContainer);
