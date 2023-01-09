const initialState = {
    celulares: [],
    oneCelular: [],
    filter:[]
}

const celularesReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GETCELS":
            return {
                ...state,
                celulares: action.payload,
            }

        case "GETONECEL":
            return {
                ...state,
                oneCelular: action.payload
            }

        case "FILTER_CELLS":
            let cellphoneFilter = state.celulares.filter(cel => cel.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            return {
                ...state,
                filter: cellphoneFilter
            }
        default:
            return state
    }
}
export default celularesReducer