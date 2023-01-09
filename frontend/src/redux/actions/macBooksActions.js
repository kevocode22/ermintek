import axios from 'axios'


const localUrl = 'http://localhost:4000/'

const macBooksActions = {
    getmacBooks: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(localUrl + `api/macbooks`)
            dispatch({ type: "GET_MACS", payload: res.data.response })
        }
    },

    getOneAppleProd: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(localUrl + `api/macbooks/${id}`)
            dispatch({
                type: "ONE_PROD_APPLE", payload: res.data.response
            })
            return res
        }
    }
}

export default macBooksActions