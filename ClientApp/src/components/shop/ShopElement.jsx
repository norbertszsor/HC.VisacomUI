import React from "react";


const ElementToReturn = props =>{
    return(
        <div className="ShopItem" >           
            <div className="ShopItemPic">
                <img src={props.plantImage}/>
            </div>
            
            <div className="ShopItemDiscription">
                <div className="ShopItemName">{props.plantName}</div>
                <div className="ShopItemPrice">{props.plantPrice}$</div>
            </div>
        </div>
    );
}

export default ElementToReturn;