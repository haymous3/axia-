import { createContext, useState, useEffect } from "react";

const addtoCarts = (cartitem, product) => {

    const existingProduct =  cartitem.find((item) => item.id === product.id)

    if(existingProduct){
       
            alert(`${product.name} exsit in your cart`)
        
      return  cartitem.map((item) => item.id === product.id ?
       {...item, quantity: item.quantity + 1
        
    } :
        {item})

        
    }
    alert(`${product.name} is added to cart`)


    return [...cartitem, {...product, quantity: 1}]
}


const increaseQuantity = (cartitem, product) => {
    const existingProduct =  cartitem.find((item) => item.id === product.id)

    if(existingProduct){
       
    
  return  cartitem.map((item) => item.id === product.id ?
   {...item, quantity: item.quantity + 1} :
    item)}

    
}

const decreaseQuantity = (cartitem, product) => {
    const existingProduct =  cartitem.find((item) => item.id === product.id)

    if(existingProduct){
        return cartitem.filter((item) => item.quantity > 1).map((item) => item.id === product.id ? 
        {...item, quantity: item.quantity -1 }: item)
    }
}

const deleteItems = (cartitem, product) => {
    const existingProduct =  cartitem.find((item) => item.id === product.id)

    if(existingProduct) {
        return cartitem.filter((item) => item.id !== product.id)
    }
}

export const CartContexts = createContext(
    {
        cartItem: [],
        addToCart: () => {},
        quantities: 0,
        increment:() => {},
        decrement: () => {},
        cartItemQuantity: 0,
        reItemQuantity: () => {},
        deleteItem : () => {}

    }
)


export const CartProvider = ({children}) => {

        const [cartItem, setCartItem] = useState([]);
        const [cartItemQuantity, setCartItemQuantiy] = useState(0)
        // const [quantity, setQuantity] = useState(0)

        useEffect(() => {
            if(cartItem.length === 0){
                setCartItemQuantiy(null)
            }else{
                setCartItemQuantiy(cartItem.length)
            }
            

        }, [cartItem])



        const addToCart = (product) => {
         
            setCartItem(addtoCarts(cartItem, product))
              
        }


        const increment = (product) => {
            setCartItem(increaseQuantity(cartItem, product))
        }

        const decrement = (product) => {
            setCartItem(decreaseQuantity(cartItem, product))
        }

        const deleteItem = (product) => {
            setCartItem(deleteItems(cartItem, product))
        }

        

       




            // console.log(cartItem.length, cartItemQuantity)
        const value = {cartItem, cartItemQuantity, addToCart, increment, decrement, deleteItem}
 
    return <CartContexts.Provider value={value}>{children}</CartContexts.Provider>
}



