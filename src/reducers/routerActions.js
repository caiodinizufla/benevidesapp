export function resetRouter() {
    return dispatch => {
        dispatch({
            type: "resetRouter"
        })
    }
}