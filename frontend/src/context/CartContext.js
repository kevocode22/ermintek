import { createContext, useEffect, useState } from "react";
import axios from "axios";

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    return await axios
      .get("http://localhost:4000/api/cellphones")
      .then(({ data }) => setProducts(data.products));
  };

  const getUserProducts = async () => {
    return await axios
      .get("http://localhost:4000/api/cart")
      .then(({ data }) => setCartItems(data.getUserProducts))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getUserProducts();
  }, []);

  const addItemToCart = async (product) => {
    const { name, imagen, precio } = product;

    await axios.post("http://localhost:4000/api/cart", { name, imagen, precio });

    getProducts();
    getUserProducts();
  };

  //   const editItemToCart = async (id, query, amount) => {
  //     if (query === "del" && amount === 1) {
  //       await axios
  //         .delete(`http://localhost:4000/products-cart/${id}`)
  //         .then(({ data }) => console.log(data));
  //     } else {
  //       await axios
  //         .put(`http://localhost:4000/products-cart/${id}?query=${query}`, {
  //           amount,
  //         })
  //         .then(({ data }) => console.log(data));
  //     }

  //     getProducts();
  //     getUserProducts();
  //   };

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;