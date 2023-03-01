import CategoryView from '../categories/category_views/category_view.component'
import './sub_categories.style.scss'

const SubDirectory = ({subcategory}) => {

    // console.log(subcategory)


    return(
        <div className='subDirectory'>
            {
                Object.keys(subcategory).map((title) => {
                    const products = subcategory[title]


                    return <CategoryView key={title} subcategory={title} product={products}/>

                    
                })   
            }
        
        </div>
    )
}


export default SubDirectory