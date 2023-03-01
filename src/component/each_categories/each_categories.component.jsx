import {useParams} from "react-router-dom";
import Products from "../../Products/Products";
import SubCategoriesDirectory from "../sub_categories_directory/sub_categories_directory.component";
import './each_categories.style.scss'
const EachCategories = () => {

    const {navPagesDisplay} = useParams()

    const eachCatogries = Products.filter((category) => category.category === navPagesDisplay )

    console.log(eachCatogries)
    return(
        <div>

        {
            eachCatogries.map((subcategory, index) => <SubCategoriesDirectory key={index} subcartegories={subcategory.subcategory}/>)
        }
        
        </div>
    )
}


export default EachCategories