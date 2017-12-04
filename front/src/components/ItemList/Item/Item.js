import React from "react";
import "./Item.css";
import Fontawesome from "react-fontawesome"

let Item = (props) => (
  <div className="general-width my-2">
    <ul className="list-group">
      <li className="list-group-item active">
        <ul className="list-group">
          <li className="list-group-item"><h1>{props.data.title}</h1></li>
          <li className="list-group-item">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <img className="img-fluid img-thumbnail rounded" src={props.data.image}/>
                </div>
                <div className="col-sm-6">
                  {props.data.content}
                </div>
              </div>
            </div>
            <li className="list-group-item">
              <button onClick={props.upVoter} className="btn btn-warning"><Fontawesome name="arrow-up"/></button>
              <button onClick={props.downVoter} className="btn btn-warning mx-2"><Fontawesome name="arrow-down"/></button>
              <a href={props.data.contentLink} target="_blank"><button className="btn btn-warning mx-2"><Fontawesome name="check"/> Go Visit Site</button></a>
              <button onClick={props.handleDelete} className="btn btn-danger btn-sm mx-2"><Fontawesome name="trash"/></button>
            </li>
          </li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Item;
