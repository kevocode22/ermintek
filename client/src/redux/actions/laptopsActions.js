import axios from 'axios'


const localUrl = 'https://ermintek.onrender.com/'

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

    likeDislike: (id)=>{
        return async(dispatch,getState)=>{
            const res = await axios.put(localUrl+`api/laptops/likes/${id}`)
            dispatch({type: 'message', payload:{view: true, message: res.data.message, success: res.data.success}})
            return res.data.response
        }
      },
    
}

export default laptopsActions