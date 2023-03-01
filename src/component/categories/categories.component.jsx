import Products from '../../Products/Products';
import SubCategoriesDirectory from '../sub_categories_directory/sub_categories_directory.component';

import './categories.style.scss'

const Categories = () => {

 const subProducts = Products.filter((categories) => categories.category === 'Fashion')

 
    return(
        <div className='categories'>

            <div className='categories_category' style={{display:'flex'}}>
            
            
              {
                subProducts.map((subcategories, index) => <SubCategoriesDirectory key={index} subcartegories={subcategories.subcategory}/>)
              }
             
          
              
            </div>
        </div>
    )
}


export default Categories