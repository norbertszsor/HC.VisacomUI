import React from 'react';
import faker from "faker";
import ShopElement from "./ShopElement";
import "./shop.css";


export default class DataProductFetch extends React.Component{
    
    
    state = {
       productData: [{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]
    }   
    render() {
        
        const itemList = [];
        return(
            
            <div className="ShopContainer">
            {
            this.state.productData.forEach((element,index) => {
                itemList.push(                 
                        <ShopElement 
                            plantImage={faker.image.nature()}
                            plantName ={faker.lorem.word()}
                            plantPrice = {faker.commerce.price()}                    
                        />
                    );
               
            })}
            <div>
                {itemList}
            </div>
               
            

            {console.log(this.state.productData)}
        </div>
        )
    }
}

