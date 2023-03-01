import ItemsCard from '../../items_card/items_card.component'
import './category_views.style.scss'
const CategoryView = ({subcategory, product}) => {

    
    return(
        <div className='categoryView'>

            <h2>{subcategory}</h2> 
            <div className='categoryView_product'>
                {
                    product.filter((_, index) => index < 6).map((products, index) => <ItemsCard key={index} product={products}/>)
                }
            
            </div>
        
        </div>
    )
}


export default CategoryView