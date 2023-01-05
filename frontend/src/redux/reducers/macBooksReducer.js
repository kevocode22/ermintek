const initialState = {
    allProducts: [],
    oneProduct: []
}

const macBooksReducer = (state = initialState, action) => {

    switch (action.type) {

        case "GET_MACS":

            return{
                ...state,
                allProducts: action.payload,
            }

            case "ONE_PROD_APPLE":
                return {
                    ...state, 
                    oneProduct: action.payload
                }

            default: 
            return state
    }
}
export default macBooksReducer