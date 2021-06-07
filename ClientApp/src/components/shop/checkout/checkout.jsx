import React from 'react';
import './checkout.css';
import ProductItem from '../shopCart/ProductItem';
export default class ShopCartRender extends React.Component{

  state = {
    user: null,
    userAddresses: null,
  }
  async componentDidMount(){
    const key =localStorage.getItem('Veryfi');
    const requestOptions = {
        method: 'GET',
        headers: {'accept': '*/*','Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "Bearer "+ key }
    }
    const apiUrl = "https://okiplants.azurewebsites.net/api/account/Details";
    const apiUrlSecond = "https://okiplants.azurewebsites.net/api/address/getmyaddresses";
    
    const rensponse = await fetch(apiUrl,requestOptions);
    const rensponseSecond = await fetch(apiUrlSecond,requestOptions);
    //console.log(rensponse);
    const data = await rensponse.json();
    const dataSecond = await rensponseSecond.json();
    
    this.setState({user: JSON.parse(JSON.stringify(data))});
    this.setState({userAddresses: JSON.parse(JSON.stringify(dataSecond))});
    console.log(this.state.userAddresses);
    //console.log(this.state.user);
  }

  
  handleClick = (addressUser) =>{
    const key =localStorage.getItem('Veryfi');
    const apiUrl = "https://okiplants.azurewebsites.net/api/orders/add";
    var cartData = JSON.parse(localStorage.getItem("cartData"));
    var product = [];
    var checkOutData = {
        product: null,
        addressId: null,
    };
  
    cartData.forEach((element,index)=>{
        product.push({
          id: element.id,
          amount: element.quantity,
        }
        )
    });
      checkOutData.product = product;
      checkOutData.addressId = addressUser;
    //console.log(JSON.stringify(checkOutData));

    

    const requestOptions = {
      method: 'POST',
      headers: {'accept': '*/*','Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "Bearer "+ key },
      body: JSON.stringify(checkOutData)
    }

    const rensponse = fetch(apiUrl,requestOptions);
    //console.log(rensponse);
    //console.log(key);
    //console.log(JSON.stringify(checkOutData));
    
  }
  
 
  render(){
    const itemList = [];
    var cartData = JSON.parse(localStorage.getItem("cartData"));
    
    if(this.state.isLoading){
      return(<div>loading</div>);
    }
    if(!this.state.user){
      return(<div>backed guys have mind error</div>);
   }
    if(this.state.user){
      if(cartData!=null){
        cartData.forEach((element,index) =>{
            itemList.push(
                <ProductItem 
                    itemName={element.itemName} 
                    quantity={element.quantity}
                    plantImage={element.imageUrl}
                    stockInfo ={element.itemStock}
                    plantID = {element.plantID}
                    />
            )
        });
    }
    }

    if(localStorage.getItem('Veryfi')==null){
      return(
        <div>u should be loged in</div>
      )
      
    }else{
      return(
        <div className="checkoutContainer">
            <div className="checkoutCartUnion">
                <div className="checkoutTxt">Your Cart</div>
                <div className="checkoutCartContainer">
                      
                      <div className="cartContainerItems">
                        {itemList}
                      </div>                
                      
                </div>
                <div className="checkoutTxt">Sum Price: NULL$</div>
            </div>
            
            <div className="checkoutFormContainer">
                  <div className="checkoutTxt">First Name</div>
                  <input type="text" className="checkoutInput"  value={this.state.user.firstName} readonly></input>
                  <div className="checkoutTxt">Last Name</div>
                  <input type="text" className="checkoutInput"  value={this.state.user.lastName} readonly></input>
                  <div className="checkoutTxt">Your Email</div>
                  <input type="text" className="checkoutInput"  value={this.state.user.email} readonly></input>
                  <div className="checkoutTxt">Your Phone Number</div>
                  <input type="text" className="checkoutInput"  value={this.state.user.phoneNumber} readonly></input>                 
            </div>
            <div className="paymentCheckout">
                  <div className="checkoutTxt">Your Card Number</div>
                  <input type="text" className="checkoutInput"  placeholder="0000-0000-0000-0000"></input>
                  <div className="checkoutTxt">Name on Card</div>
                  <input type="text" className="checkoutInput"  placeholder="Jhon Smith"></input>
                  <div className="checkoutTxt">Exp. Date</div>
                  <input type="text" className="checkoutInput"  placeholder="05/23"></input>
                  <div className="checkoutTxt">CVV</div>
                  <input type="text" className="checkoutInput"  placeholder="CVV: 000"></input>
            </div>           
            <button className="checkoutBtn"onClick={()=>this.handleClick(4)}>Finalize</button>
          
        </div>
      )
    }
    }
   
}