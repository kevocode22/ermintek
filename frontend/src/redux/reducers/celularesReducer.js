const initialState = {
    celulares: []
}

const celularesReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GETCELS":

            return{
                ...state,
                celulares: action.payload,
            }

            default: 
            return state
    }
}
export default celularesReducer