const initialState = {
    laptops: [],
    oneLaptop: []
}

const laptopsReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GET_LAPTOPS":

            return{
                ...state,
                laptops: action.payload,
            }
            case "GET_ONE_LAP":
                return{
                    ...state,
                    oneLaptop: action.payload,
                }
            default: 
            return state
    }
}
export default laptopsReducer