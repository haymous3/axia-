import { Link} from 'react-router-dom'
import Products from '../../Products/Products'
import SubDirectory from '../sub_categories/sub_categories.component'
import './sub_categories_directory.style.scss'

const SubCategoriesDirectory = ({subcartegories}) => {

    
   

    return(
        <div className='subCategoriesDirectory'>
                <div className='subCategoriesDirectory_title'>
                    {
                        Products.map((categories, index) => <Link to={categories.category} key={index}>{categories.category}</Link>)
                    }
                </div>
                    {
                    subcartegories.map((subcategory, index) => <SubDirectory key={index} subcategory={subcategory}/>)
                    
                    }     
        </div>
    )
}



export default SubCategoriesDirectory