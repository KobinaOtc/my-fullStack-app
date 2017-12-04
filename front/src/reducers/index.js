let defaultState = {
  items: []
}

let mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        items: action.items
      }
    default:
      return state
  }
}

export default mainReducer;
