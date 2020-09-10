const initialState = {
  products: [
    ["", "", "", "", ""]
  ]
};

export function home(state = initialState, action) {
  switch (action.type) {
    case "getProducts":
      return {
        ...state,
        products: action.payload
      }

    default:
      return state;
  }
}