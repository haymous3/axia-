import { createContext, useContext, useState, useEffect } from "react";
import { CartContexts } from "../cart_contexts/cart_contexts";


const CartMultistepProcess = [

    {
        process:1,
        processDetailsOne: []
    },

    {
        process:2,
        processDetailsTwo: [

            {
                label:'First Name',
                type:'text'
            },
            {
                label:'Last Name',
                type:'text'
            },
            {
                label:'Email Addresss',
                type:'email'
            },
            {
                label:'Phone Number',
                type:'number'
            },
            {
                label: 'Country',
                type: 'select',
                options: ['Nigeria']
            },
            {
                label:'State',
                type:'selects',
                options: [
                    {
                        state:'Lagos',
                        lga: ['Agege', 'Oshodi', 'Mushin', 'Ayobo', 'Ikeja']
                    },
                    {
                        state: 'Ogun',
                        lga: ['Abeokuta', 'Otta', 'Ayetoro', 'Itele', 'Atan']
                    },
                    {
                        state: 'Osun',
                        lga: ['Oshobo', 'Iree', 'Iwo', 'Ila', 'Ife']
                    }
                ]
            },
           
            {
                label:'Zip Code',
                type: 'number',
            },
            {
                label:'Address',
                type:'text'
            }
            

            
        ]
    },
    {
        process:'3',
        processDetailsThree:[

        ]
    },
    {
       process: '4',
       processDetailsOne:[]  
    }

]

    




export const CartMultistepProcessContexts = createContext({
    cartProcess: ''

}) 


export const CartMultistepProcessContextsProvider = ({children}) => {
    const [cartProcess, setCartProcess] = useState(CartMultistepProcess);

    const {cartItem} = useContext(CartContexts)

    useEffect(() => {
        const initialCartProcess = CartMultistepProcess.map((processes) => {
            if(processes.hasOwnProperty('processDetailsOne')){
                processes.processDetailsOne = cartItem  
            }

            return {...processes}
        })

        setCartProcess(initialCartProcess)

    }, [cartItem])

    const value = {cartProcess}

  



    return <CartMultistepProcessContexts.Provider value={value}>{children}</CartMultistepProcessContexts.Provider>
}

