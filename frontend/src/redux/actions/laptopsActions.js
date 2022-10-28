import axios from 'axios'


const localUrl = 'http://localhost:4000/'

const laptopsActions = {
    getLaptops: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(localUrl + `api/laptops`)
            // console.log(res.data.response.cellPhones)
            dispatch({ type: "GET_LAPTOPS", payload: res.data.response })
        }
    },
}

export default laptopsActions