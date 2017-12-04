import React from "react";
import "./Form.css"

let Form = (props) => (
  <div className="general-width">
    <div className="container">
        <ul className="list-group">
          <li className="list-group-item active">
            <form onSubmit={props.handleSubmit}>
              <input name="title" value={props.title} onChange={props.handleChange} className="mt-3 form-control form-control-lg" placeholder="Title"/>
              <input name="image" value={props.image} onChange={props.handleChange} className="my-3 form-control form-control-sm" placeholder="Image (optional)"/>
              <input name="contentLink" value={props.contentLink} onChange={props.handleChange} className="mb-3 form-control form-control-sm" placeholder="Website (optional)"/>
              <textarea name="content" value={props.content} onChange={props.handleChange} className="mb-3 form-control" placeholder="Discription"/>
              <button className="btn btn-light" type="submit">Post</button>
            </form>
          </li>
        </ul>
    </div>
  </div>
)

export default Form;
