import React from "react";
import ShopCart from "./shopCart/ShopCart";


function addToCart(cartItemName,stockInfo,plantImgUrl){
    var checker = 0;
    var cartData = [
        {
            itemName: cartItemName,
            quantity: 1,
            itemStock: stockInfo,
            imageUrl: plantImgUrl,
        }
    ];
    if(localStorage.getItem("cartData")==null){
        localStorage.setItem("cartData",JSON.stringify(cartData));
        
    }else{
        
        cartData = JSON.parse(localStorage.getItem("cartData"));
        
        cartData.forEach((element,index)=>{
            if(element.itemName == cartItemName){
                
                cartData[index].quantity = cartData[index].quantity + 1;
                checker = 1;
            }
        });
        if(checker!=1){
            cartData.push({
                itemName: cartItemName,
                quantity: 1,
                itemStock: stockInfo,
                imageUrl: plantImgUrl,
            });
        }
        localStorage.setItem("cartData",JSON.stringify(cartData));

        checker = 0;
    }
}


const ElementToReturn = props =>{
    return(
        
        <div className="ShopItem">  
            <div className="ShopItemPicContainer">
                <img className="ShopItemPic" src={props.plantImage}/>
                
            </div>
            <div className="contentHelper">
                <div className="ShopItemName">{props.plantName}</div>   
                <div className="ShopItemStory">{props.plantStory}</div>
                <div className="ShopItemPrice">{props.plantPrice}$</div> 
                
            </div>
            <div className="ShopItemDiscription">             
            <button className ="ShopAddBtn" onClick={() => addToCart(props.plantName,props.plantStockInfo,props.plantImage)}>Add To Cart</button>
            </div>           
            
        </div>
    );
}

export default ElementToReturn;