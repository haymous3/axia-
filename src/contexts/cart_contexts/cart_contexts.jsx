import { createContext, useState, useEffect } from "react";

const addtoCarts = (cartitem, product) => {

    const existingProduct =  cartitem.find((item) => item.id === product.id)

    if(existingProduct){

      return  cartitem.map((item) => item.id === product.id ?
       {...item, quantity: item.quantity + 1} :
        {item})
    }



    return [...cartitem, {...product, quantity: 1}]
}

export const CartContexts = createContext(
    {
        cartItem: [],
        addToCart: () => {},
        quantity: 0,
        increment:() => {},
        decrement: () => {},

    }
)


export const CartProvider = ({children}) => {

        const [cartItem, setCartItem] = useState([]);
        const [quantity, setQuantity] = useState(0)


        const addToCart = (product) => {
            setCartItem(addtoCarts(cartItem, product))
            
        }

            console.log(cartItem)
        const value = {cartItem, quantity, addToCart}
 
    return <CartContexts.Provider value={value}>{children}</CartContexts.Provider>
}



