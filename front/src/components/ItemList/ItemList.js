import React from "react";
import "./ItemList.css";
import Item from "./Item"

let ItemList = (props) => (
  <div>
    {
      props.data.sort((a, b) => {
        return ((b.upVote - b.downVote) - (a.upVote - a.downVote))
      }).map((item, index) => (
        <Item key={item.title + index} data={item} index={index}/>
      ))
    }
  </div>
)

export default ItemList;
