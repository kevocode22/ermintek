import axios from 'axios'


const localUrl = 'http://localhost:4000/'

const celularesActions = {
    getCelulares: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(localUrl + `api/cellphones`)
            // console.log(res.data.response.cellPhones)
            dispatch({ type: "GETCELS", payload: res.data.response.cellPhones })
        }
    },

    getOneCelular: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/cellphones/${id}`)
            console.log(id)
            console.log(res)
            dispatch({ type: "GET_ONE_CEL", payload: res.data.response })
        }
    },

}

export default celularesActions