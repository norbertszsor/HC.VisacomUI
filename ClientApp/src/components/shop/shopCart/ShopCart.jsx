import React, { Component, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Link from '../../navMenu/Link';
import '../shop.css';

function openForm(){
    document.getElementById("myForm").style.display = "block";
    
}
function closeForm(){
    document.getElementById("myForm").style.display = "none";
}





export default class ShopCartRender extends React.Component{
    
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 250);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    handleClick = () =>{
        openForm();
        this.forceUpdate();
    }  
 
    render(){
        var cartData = JSON.parse(localStorage.getItem("cartData"));
        console.log("dziala");
        const itemList = [];
        
        if(cartData!=null){
            cartData.forEach((element,index) =>{
                itemList.push(
                    <ProductItem 
                        itemName={element.itemName} 
                        quantity={element.quantity}
                        plantImage={element.imageUrl}
                        stockInfo ={element.itemStock}
                        />
                )
                
    
            });
        }
       
        
        return(
            <div>
            <button className="open-button" onClick={this.handleClick}>Show Cart</button>
                <div className="form-popup" id="myForm">
                    <div className="form-container">
                    <h2>Your Cart</h2>
                    {itemList}
                                    
                    <button className="btn" id="checkout button">Checkout</button>
                    <button className="btn cancel" id="cancelbutton" onClick={()=>closeForm()}>Close Preview</button>
                    </div>
                </div> 
            </div>
        )
    }
}
