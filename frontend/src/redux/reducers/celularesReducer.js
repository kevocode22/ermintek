const initialState = {
    celulares: [],
    oneCelular:[]
}

const celularesReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GETCELS":

            return{
                ...state,
                celulares: action.payload,
            }

        case "GETONECEL":
            return{
                ...state,
                oneCelular: action.payload
            }

            default: 
            return state
    }
}
export default celularesReducer