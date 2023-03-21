import { createContext, useContext, useState, useEffect } from "react";
import { CartContexts } from "../cart_contexts/cart_contexts";


const CartMultistepProcess = [

    {
        process_one:1,
        processDetailsOne: []
    },

    {
        process_two:2,
        processDetailsTwo: [

            {
                label:'firstname',
                type:'text'
            },
            {
                label:'lastname',
                type:'text'
            },
            {
                label:'email addresss',
                type:'email'
            },
            {
                label:'phone number',
                type:'number'
            },
            {
                label: 'country',
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
        process_three:'3',
        processDetailsThree:[

        ]
    },
    {
       process_four: '4',
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

