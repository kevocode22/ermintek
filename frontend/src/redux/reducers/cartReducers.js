const initialState = {
    productos: [],
    uno: [],
    favourites: [],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRO':
            return {
                ...state,
                productos: action.payload
            }
        case 'GET_ONE':
            return {
                ...state,
                uno: action.payload
            }
        case 'GET_FAVS':
            return {
                ...state,
                favourites: action.payload
            }
        default:
            return state
    }
}
export default productReducer