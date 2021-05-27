import React from 'react';
import ElementToReturn from '../ShopElement';


export default class ProductItemRender extends React.Component{
   
    state = {
        plantImage: this.props.plantImage,
        itemName: this.props.itemName,
        quantity: this.props.quantity,
        itemStock: this.props.stockInfo,

    }
   
    handleClickMinus = () =>{
        var cartData = JSON.parse(localStorage.getItem("cartData"));
        
        cartData.forEach((element,index) =>{
            if(element.itemName==this.state.itemName){
                if(element.quantity<=1){
                    cartData.splice(index,1);
                    element.quantity = 1;
                }else{
                    element.quantity = element.quantity -1;
                }
            }
        });

        if(this.state.quantity<=1){
            this.state.quantity = 1;
        }else{
            this.state.quantity = this.state.quantity-1;
        }
        

        localStorage.setItem("cartData",JSON.stringify(cartData));
        this.forceUpdate();
    }
    handleClickPlus = () =>{
        var cartData = JSON.parse(localStorage.getItem("cartData"));
        
        cartData.forEach((element,index) =>{
            if(element.itemName==this.state.itemName){
                if(element.quantity<this.state.itemStock){
                    element.quantity = element.quantity +1;
                }else{
                    element.quantity = this.state.itemStock;
                }
                
            }
        });

        if(this.state.quantity<this.state.itemStock){
            this.state.quantity = this.state.quantity+1;
        }else{
            this.state.quantity = this.state.itemStock;
        }
        

        localStorage.setItem("cartData",JSON.stringify(cartData));
        this.forceUpdate();
    }

  render(){
      
      
     
      
      return(
        <div className="cartItem">
        <div className="cartItemImageDiv">
            <img className ="cartItemImage"src={this.state.plantImage}/>   
        </div>
        <div>{this.state.itemName}</div>
        <div>Amount: {this.state.quantity}</div>          
        <button className = "plusButton"  id = "plus" onClick={this.handleClickPlus}>+</button>
        <button className = "minusButton" id = "minus" onClick={this.handleClickMinus}>-</button>
        
        
    </div>
      )
  }
}
