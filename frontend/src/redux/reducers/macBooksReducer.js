const initialState = {
    macbooks: []
}

const macBooksReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GET_MACS":

            return{
                ...state,
                macbooks: action.payload,
            }

            default: 
            return state
    }
}
export default macBooksReducer