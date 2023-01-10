import axios from 'axios'

const url = 'http://localhost:4000/'

const cartActions = {

    addFavourite: (idProducto) => {
        return async (dispatch, getState) => {
            const res = await axios.post(url + `api/favourites`, { idProducto })
            dispatch({ type: 'message', payload: { view: true, message: res.data.message, success: res.data.success } })
            return res.data.response
        }
    },

    getUserFavourites: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(url + `api/favourites`)
            dispatch({ type: 'GET_FAVS', payload: res.data.response })
        }
    },


    deleteProduct: (id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            try {
                const res = await axios.delete(url + `api/cart/${id}`, { headers: { Authorization: "Bearer " + token } })
                dispatch({ type: 'message', payload: { view: true, message: res.data.message, success: res.data.success } })
                return res.data.response
            } catch (err) {
                console.log(err)
            }
        }
    },

    getOneProduct: (id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const answer = await axios.get(url + `api/cart/${id}`, { headers: { Authorization: "Bearer " + token } })
            dispatch({ type: 'GET_ONE', payload: answer.data.response })
            return (answer.data.response)
        }
    },
    modifyProduct: (modifyCarrito) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put(url + `api/shopping`, { ...modifyCarrito },
                { headers: { Authorization: "Bearer " + token } })
            dispatch({ type: 'message', payload: { view: true, message: res.data.message, success: res.data.success } })
            return res.data.response
        }
    },
}

export default cartActions