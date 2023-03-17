import './button.style.scss'

const  BUTTON_TYPES = {
    signupwithgoogle: 'sign_up_with_google',
    signin:'sign_in',
    chatwithbot:'chat_with_bot',
    customerservice:'customer_service',
    increaseCartBtn: 'increase_Cart_Btn'
}


const Button = ({buttontype, children, eventFunction}) => {
    return <button className={`${BUTTON_TYPES[buttontype]}`} onClick={eventFunction}>{children}</button>
}

export default Button