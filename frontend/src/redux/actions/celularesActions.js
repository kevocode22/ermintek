import axios from 'axios'

const localUrl = 'http://localhost:4000/'

const celularesActions = {
    getCelulares: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(localUrl + `api/cellphones`)
            dispatch({ type: "GETCELS", payload: res.data.response.cellPhones })
        }
    },

    getOneCelular: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(localUrl + `api/cellphones/${id}`);
            dispatch({ type: "GETONECEL", payload: res.data.response });
            return res
        }

    },

    filterCellphones: (input) => {
        return (dispatch, getState) => {
            dispatch({ type: 'FILTER_CELLS', payload: input })
        }
    }



}

export default celularesActions