import React from 'react';
import Faker from 'faker';
import "../blog/blog.css";

const BlogElements = props => {
    const ProductList=[];
    const ReturnTab=[];
    return (
        
        <div className="ProfileOrderCont" >
            
           <div className="ProfileOrderStatus">Status: {props.data.status}</div>
            {props.data.products.forEach(element => {
                ProductList.push(element);
            })}
            {ProductList.forEach(element => {
                ReturnTab.push(<div className="ProfileProducts">{element.name}{" |Amount: "}{element.amount}{" Price "}{element.price}{"$"}</div>)
            })}
            {ReturnTab}
            <div className="ProfileOrderTotalCost">Total: {props.data.totalCost}$</div>
        </div>
    
    );

}
export default BlogElements;