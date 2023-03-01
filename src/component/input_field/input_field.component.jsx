
import './input_field.style.scss'


const InputFields = {
    searchBox: 'searchBox'
}

const InputField = ({type, eventFunction, placeHolder, inputType }) => {

    return(
   
        <input type={type} onChange={eventFunction} placeholder={placeHolder} className={`${InputFields[inputType]}`}/>

        
       
    )
}


export default InputField