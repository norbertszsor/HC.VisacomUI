import React from 'react';
export default class ShopCartRender extends React.Component{

  state = {
    user: null,
  }
  async componentDidMount(){
    const key =localStorage.getItem('Veryfi');
    const requestOptions = {
        method: 'GET',
        headers: {'accept': '*/*','Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "Bearer "+ key }
    }
    const apiUrl = "https://okiplants.azurewebsites.net/api/account/Details";
    const rensponse = await fetch(apiUrl,requestOptions);
    console.log(rensponse);
    const data = await rensponse.json();
    
    this.setState({user: JSON.parse(JSON.stringify(data))});
    console.log(this.state.user);
  }

  
  handleClick = (addressUser) =>{
    const key =localStorage.getItem('Veryfi');
    const apiUrl = "https://okiplants.azurewebsites.net/api/orders/add";
    var cartData = JSON.parse(localStorage.getItem("cartData"));
    var productId = [];
    var checkOutData = [];
  
    cartData.forEach((element,index)=>{
        productId.push({
          id: element.id,
          quantity: element.quantity,
        }
        )
    });
    checkOutData.push(
      {
        productId,
      },
      {
        addressId: addressUser,
      } 
    )
    console.log(JSON.stringify(checkOutData));

    

    const requestOptions = {
      method: 'POST',
      headers: {'accept': '*/*','Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "Bearer "+ key },
      body: JSON.stringify(checkOutData)
    }

    const rensponse = fetch(apiUrl,requestOptions);
    console.log(rensponse);
    console.log(key);
    
  }
  
 
  render(){
    
    if(this.state.isLoading){
      return(<div>loading</div>);
    }
    if(!this.state.user){
      return(<div>backed guys have mind error</div>);
   }
    if(this.state.user){
    }

    if(localStorage.getItem('Veryfi')==null){
      return(
        <div>u should be loged in</div>
      )
      
    }else{
      return(


        <div className="checkoutContainer">
          <div>
            {this.state.user}
          </div>
          <button onClick={()=>this.handleClick(100)}>DodajTEST</button>
        </div>
      )
    }
    }
   
}