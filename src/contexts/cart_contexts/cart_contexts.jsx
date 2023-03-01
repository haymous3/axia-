import { createContext, useState } from "react";



export const CartContexts = createContext(
    {
        cartItem: {},
        addToCart: () => {}
    }
)