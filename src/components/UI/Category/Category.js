import React from 'react';
import Food from './../Food/Food';
import { FILES_BASE_DIR } from '../../../utils/Constants';

const Category = ({category, foods}) => {

	return (
		<div id={category.id} className="menu-category">
            <div className="menu-category-title collapse-toggle" role="tab" data-target={"#menu" + category.id + "Content"} data-toggle="collapse" aria-expanded="true">
                <div className="bg-image"><img src={FILES_BASE_DIR + category.image} alt="" /></div>
                <h2 className="title">{category.title}</h2>
            </div>
            <div id={"menu" + category.id + "Content"} className="menu-category-content padded collapse show">
                <div className="row gutters-sm">
                    {
                    	foods !== undefined ? foods.map(food => <Food key={food.id} food={food}/>) : null
                    }
                </div>
            </div>
        </div>
	)

};

export default Category;