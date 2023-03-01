import { useParams } from 'react-router-dom';
import InputField from '../input_field/input_field.component';
import './page_title.style.scss'

const PageTitle = () => {

    const {navPagesDisplay} = useParams()

    return(
        <div className='pageTitle'>
            <h4>{navPagesDisplay.toLocaleUpperCase()}</h4>

            <InputField type='search' inputType='searchBox' placeHolder='search anything'/>


            <h3>Hello, Amos</h3>
        
        </div>
    )
}


export default PageTitle