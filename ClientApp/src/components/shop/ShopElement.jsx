import React from "react";
import Faker from 'faker';

const ElementToReturn = () =>{
    return(
        <div className="ShopItem">

            <div className="ShopItemPic">
                <img src={Faker.image.nature()}/>
            </div>

            <div className="ShopItemDiscription">
                <div className="ShopItemName">{Faker.lorem.word()}</div>
                <div className="ShopItemPrice">{Faker.commerce.price(5,100)}$</div>
            </div>
        </div>
    );
}

export default ElementToReturn;