import { createContext, useState } from "react";



export const ModalContexts = createContext({
    openModal: '',
    setOpenModal: () => {}
})




export const ModalContextsProvider = ({children}) => {


    const [openModal, setOpenModal] = useState(false)


    const value ={openModal, setOpenModal}




    return <ModalContexts.Provider value={value}>{children}</ModalContexts.Provider>
}