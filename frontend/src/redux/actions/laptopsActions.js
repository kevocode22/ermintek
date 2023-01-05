import axios from 'axios'


const localUrl = 'http://localhost:4000/'

const laptopsActions = {
    getLaptops: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(localUrl + `api/laptops`)
            dispatch({ type: "GET_LAPTOPS", payload: res.data.response })
        }
    },
    getOneLaptop: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(localUrl + `api/laptops/${id}`);
            dispatch({ type: "GET_ONE_LAP", payload: res.data.response });
            return res
        }
        
    },
}

export default laptopsActions