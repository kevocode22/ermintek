const initialState = {
    celulares: [],
    getOneCel:[]
}

const celularesReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GETCELS":

            return{
                ...state,
                celulares: action.payload,
            }

        case "GET_ONE_CEL":
            return{
                ...state,
                getOneCel: action.payload
            }

            default: 
            return state
    }
}
export default celularesReducer