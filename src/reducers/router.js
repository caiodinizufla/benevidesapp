const initialState = {
  route:{
        redirect: false,
        from: ''
  }
};

export function router(state = initialState, action) {
  switch (action.type) {
    case "/home": {
      return {
        ...state,
        route:{
            redirect: true,
            from: '/home'
        }
      };
    }
    case "resetRouter": {
      return initialState;
    }
    default:
      return state;
  }
}