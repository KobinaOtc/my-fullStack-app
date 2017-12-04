import axios from "axios";

export function setItems(items) {
  return {
    type: "SET_ITEMS",
    items
  }
}

export function loadItems() {
  return (dispatch) => {
    return axios.get("http://localhost:9000/posts").then((response) => {
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}

export function addItem(title, content, image, contentLink) {
  return (dispatch) => {
    return axios.post("http://localhost:9000/posts", {title, content, image, contentLink}).then((response) => {
      dispatch(loadItems());
    }).catch((error) => {
      alert(error);
    });
  }
}

export function deleteItem(id) {
  return (dispatch) => {
    return axios.delete(`http://localhost:9000/posts/${id}`).then((response) => {
      dispatch(loadItems());
    }).catch((error) => {
      alert(error);
    });
  }
}

export function upVoteItem(id) {
  return (dispatch) => {
    return axios.put(`http://localhost:9000/posts/up/${id}`).then((response) => {
      dispatch(loadItems());
    }).catch((error) => {
      alert(error);
    })
  }
}

export function downVoteItem(id) {
  return (dispatch) => {
    return axios.put(`http://localhost:9000/posts/down/${id}`).then((response) => {
      dispatch(loadItems());
    }).catch((error) => {
      alert(error);
    })
  }
}
