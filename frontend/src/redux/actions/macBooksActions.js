import axios from 'axios'


const localUrl = 'http://localhost:4000/'

const macBooksActions = {
    getmacBooks: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(localUrl + `api/macbooks`)
            // console.log(res.data.response.cellPhones)
            dispatch({ type: "GET_MACS", payload: res.data.response })
        }
    },
}

export default macBooksActions