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

    if(existingProduct.quantity === 1){
        return cartitem.filter((item) => (item.id !== product.id)) 
       
    }

    return cartitem.map((item) => item.id === product.id ?
    {...item, quantity: item.quantity - 1}
    :
    item)
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
        deleteItem : () => {},
        totalAmount: 0,
        taxes: 0,
        overallAmount: 0

    }
)


export const CartProvider = ({children}) => {

        const [cartItem, setCartItem] = useState([]); 
        const [cartItemQuantity, setCartItemQuantiy] = useState(0)
        const [totalAmount, setTotalAmount] = useState(0)
        const [taxes, setTaxes] = useState(0)
        const [overallAmount, setOverallAmount] = useState(0)


        useEffect(() => {
            const totalprice = cartItem.reduce((start, finish) => {
                  return start + finish.price * finish.quantity
            }, 0) 
  
            setTotalAmount(totalprice)
          }, [cartItem])

        useEffect(() => {
            if(cartItem.length === 0){
                setCartItemQuantiy(null)
            }else{
                setCartItemQuantiy(cartItem.length)
            }
            

        }, [cartItem])

        useEffect(() => {

            const taxepayment = 10/100 * totalAmount

            setTaxes(taxepayment)

        }, [totalAmount])


        useEffect(() => {

            const overall = totalAmount + taxes
            setOverallAmount(overall)
        }, [totalAmount, taxes])

       



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
        const value = {cartItem, cartItemQuantity, addToCart, increment, decrement, deleteItem, totalAmount, taxes, overallAmount}
 
    return <CartContexts.Provider value={value}>{children}</CartContexts.Provider>
}



