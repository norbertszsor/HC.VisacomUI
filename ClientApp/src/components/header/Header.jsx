import React from 'react';
import ShopCart from '../shop/shopCart/ShopCart';

const ElementToReturn = () =>{
    return(
        <div className="header">
            <ShopCart></ShopCart>
            <h1>OkiPlants</h1>              
        </div>   
    );
}

export default ElementToReturn;