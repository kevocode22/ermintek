const initialState = {
    laptops: []
}

const laptopsReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GET_LAPTOPS":

            return{
                ...state,
                laptops: action.payload,
            }

            default: 
            return state
    }
}
export default laptopsReducer