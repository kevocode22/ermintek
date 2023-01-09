const initialState = {
    laptops: [],
    oneLaptop: [],
    favourites: []
}

const laptopsReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GET_LAPTOPS":

            return {
                ...state,
                laptops: action.payload,
            }
        case "GET_ONE_LAP":
            return {
                ...state,
                oneLaptop: action.payload,
            }

        case "LIKEORDISLIKE":
            return {
                ...state,
                favourites: action.payload,
            }
        default:
            return state
    }
}
export default laptopsReducer