import React from 'react';
import './checkout.css';
import ProductItem from '../shopCart/ProductItemCheckout';
import Link from '../../navMenu/Link';







export default class ShopCartRender extends React.Component{

  state = {
    user: null,
    userAddresses: null,
    idAddress: null,
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
 

    const data = await rensponse.json();
    const dataSecond = await rensponseSecond.json();
    
    this.setState({user: JSON.parse(JSON.stringify(data))});
    this.setState({userAddresses: JSON.parse(JSON.stringify(dataSecond))});
    console.log(this.state.userAddresses);

  }

  handeSelectChange = e =>{
    if(e.target.value!=null){
      this.setState({idAddress: e.target.value})
    }
  }
  handleClick = (addressUser) =>{
    const key = localStorage.getItem('Veryfi');
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
    

    const requestOptions = {
      method: 'POST',
      headers: {'accept': '*/*','Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "Bearer "+ key },
      body: JSON.stringify(checkOutData)
    }

    const rensponse = fetch(apiUrl,requestOptions);  
  }
  handleClickNextStep = () =>{
     var checkoutStepId = JSON.parse(localStorage.getItem("checkoutStepId"));
     checkoutStepId = checkoutStepId + 1;
     if(checkoutStepId > 4){
        checkoutStepId = 1;
     }
     localStorage.setItem('checkoutStepId',JSON.stringify(checkoutStepId));
     this.forceUpdate();
  }
  handleClickPreviusStep = () =>{
    var checkoutStepId = JSON.parse(localStorage.getItem("checkoutStepId"));
    checkoutStepId = checkoutStepId - 1;
    if(checkoutStepId < 1){
       checkoutStepId = 4;
    }
    localStorage.setItem('checkoutStepId',JSON.stringify(checkoutStepId));
    this.forceUpdate();
  }
  clearstateID = () =>{
    var checkoutStepId = JSON.parse(localStorage.getItem("checkoutStepId"));
    checkoutStepId = 1;
    localStorage.setItem('checkoutStepId',JSON.stringify(checkoutStepId));
  }
  closePaymentWindow = () =>{
    this.handleClick(this.state.idAddress);
    var checkoutStepId = JSON.parse(localStorage.getItem("checkoutStepId"));
    checkoutStepId = 5;

    document.getElementById("myModal").style.display = "none";
    localStorage.setItem('checkoutStepId',JSON.stringify(checkoutStepId));
    localStorage.removeItem('cartData');

    
    this.forceUpdate();
  }
  paymentReverse = () =>{
    if((document.getElementById("end").style.display = "block")!=null && (document.getElementById("start").style.display = "none")!=null){
      document.getElementById("end").style.display = "block";
      document.getElementById("start").style.display = "none";
      clearTimeout();
      setTimeout(()=>this.closePaymentWindow(),2000);
    }
    
  }
  showPaymentWindow =() => {
    if((document.getElementById("myModal").style.display = "block")!=null&&(document.getElementById("end").style.display = "none")!=null){
      document.getElementById("myModal").style.display = "block";
      document.getElementById("end").style.display = "none";
    }
    

    setTimeout(() => this.paymentReverse(),5000);
    
  }
  
 
  render(){
    const itemList = [];
    const billItems = [];
    const userAdresList = [];
    var checkoutStepId = 1;
    var sumPrice = 0;
    var cartData = JSON.parse(localStorage.getItem("cartData"));

    if(this.state.isLoading){
      return(<div>loading</div>);
    }
    if(!this.state.user){
      return(<div>u should be loged in</div>);
    }
    if(!this.state.userAddresses){
      return(<div>retriving data form server</div>);
    }
    if(this.state.userAddresses){
        this.state.userAddresses.forEach((element,index)=>{
            userAdresList.push(
              <option value={element.id}>Address: {element.street}, {element.houseNumber}, {element.postalCode}, {element.town}</option>
            )
        });
        console.log(this.state.idAddress)
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
        cartData.forEach((element,index) =>{
          sumPrice = sumPrice+Number(element.price)*Number(element.quantity);
      });
      cartData.forEach((element,index) =>{
        billItems.push(
          <tr>
            <td>{element.itemName}</td>
            <td>${element.price}</td>
            <td>{element.quantity}</td>
            <td>${Number(element.quantity)*Number(element.price)}</td>
          </tr>
        )
    });
        
    }}
    
    if(localStorage.getItem('checkoutStepId')==null){
      localStorage.setItem('checkoutStepId',JSON.stringify(checkoutStepId));
    }else{
      checkoutStepId = JSON.parse(localStorage.getItem("checkoutStepId"));
    }



    if(checkoutStepId == 1){
      if(localStorage.getItem('Veryfi')==null){
        return(
          <div>u should be loged in</div>
        )
        
      }else{
        return(
          <div className="checkoutContainer">
            <div className="checkoutStepInfo">Step 1/4</div>
              <div className="checkoutCartUnion">
                <div className="checkoutTxtCart">Your Cart</div>
                <div className="checkoutCartContainer">
                      
                      <div className="cartContainerItems">
                        {itemList}
                      </div>                
                      
                </div>
                <div className="checkoutTxtCart">To Pay: {sumPrice} $</div>
                <div className="checkoutBtnContainer">
                  <button className="checkoutBtn"onClick={this.handleClickNextStep}>Next Step</button>
                </div>
            </div>
            
            
            
          </div>
        )
      }

    }else if(checkoutStepId == 2){
      if(localStorage.getItem('Veryfi')==null){
        return(
          <div>u should be loged in</div>
        )
        
      }else{
        return(
          <div className="checkoutContainer">
              <div className="checkoutStepInfo">Step 2/4</div>
              <div className="paymentCheckout">
                  <div className="checkoutTxt">Accepted Cards
                      <img className ="cardsIMGcheckout"src="https://www.nicepng.com/png/detail/87-870209_credit-card-logos-fastasticdeals-we-accept-credit-cards.png"></img>
                  </div>
                  <div className="checkoutTxt">Your Card Number: </div>
                  <input type="text" className="checkoutInput"  placeholder="0000-0000-0000-0000"></input>
                  <div className="checkoutTxt">Name on Card: </div>
                  <input type="text" className="checkoutInput"  placeholder="Jhon Smith"></input>
                  <div className="checkoutTxt">Exp. Date: </div>
                  <input type="text" className="checkoutInput"  placeholder="05/23"></input>
                  <div className="checkoutTxt">CVV: </div>
                  <input type="text" className="checkoutInput"  placeholder="CVV: 000"></input>
                  <div className="checkoutBtnContainer">
              <button className="checkoutBtn"onClick={this.handleClickPreviusStep}>Previous Step</button>
                <button className="checkoutBtn"onClick={this.handleClickNextStep}>Next Step</button>
              </div> 
            </div>
                                  
            
            
          </div>
        )
      }

    }else if(checkoutStepId == 3){
      if(localStorage.getItem('Veryfi')==null){
        return(
          <div>u should be loged in</div>
        )
        
      }else{
        return(
          <div className="checkoutContainer">
            <div className="checkoutStepInfo">Step 3/4</div>
            <div className="checkoutFormContainer">
                  <div className="checkoutTxtCart">Personal Info</div>
                  <div className="checkoutTxt">First Name: </div>
                  <div className="checkoutInputMark">{this.state.user.firstName}</div>
                  <div className="checkoutTxt">Last Name: </div>
                  <div className="checkoutInputMark">{this.state.user.lastName}</div>
                  <div className="checkoutTxt">Your Email: </div>
                  <div className="checkoutInputMark">{this.state.user.email}</div>
                  <div className="checkoutTxt">Your Phone Number: </div>
                  <div className="checkoutInputMark">{this.state.user.phoneNumber}</div>
                  <div className="checkoutTxt">Select Adress for Delivery: </div>
                  <select className ="selectAdress"name="optionsAddress" onChange={this.handeSelectChange}>
                    <option></option>
                    {userAdresList}
                    </select>
                  <div className="checkoutBtnContainer">
                    <button className="checkoutBtn"onClick={this.handleClickPreviusStep}>Previous Step</button>
                    <button className="checkoutBtn"onClick={this.handleClickNextStep}>Next Step</button>
                  </div>                    
            </div>            
             
          </div>
        )
      }

    }else if(checkoutStepId == 4){
      if(localStorage.getItem('Veryfi')==null){
        return(
          <div>u should be loged in</div>
        )
        
      }else{
        return(
          <div className="checkoutContainer">
            <div className="checkoutStepInfo">Step 4/4</div>
              
              <div className="tableBillInfo">
                
              </div>

              <div className="tableBillcontainer">
              
              <table>
                <tr>
                  <th>From: </th>
                  <th>To: </th>
                </tr>
                <tr>
                    <td>Oki Plants L.L.C</td>
                    <td>{this.state.user.firstName} {this.state.user.lastName}</td>
                </tr>
                <tr>
                    <td>Pstrowskiego 13/63</td>
                    <td>Temporary Null/Null</td>
                </tr>
                <tr>
                    <td>10-691 Olsztyn, Poland</td>
                    <td>00-000 Null, Null</td>
                </tr>
                <tr>
                    <td>Email: OkiPlants@outlook.com</td>
                    <td>Emial: {this.state.user.email}</td>
                </tr>
                <tr>
                    <td>Phone: +91 6541 431 212</td>
                    <td>Phone: +48 {this.state.user.phoneNumber}</td>
                </tr>

              </table>
              
              <table>
                  <tr>
                      <th>Product</th>                     
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                  </tr>
                  {billItems}
                  <tr>
                    <th>SubTotal: {sumPrice} $</th>
                  </tr>

              </table>

              </div>
              
              
            
            
            <button className="checkoutBtnModal" onClick={()=>this.showPaymentWindow()}>Complete the payment</button>
            <div className="checkoutBtnContainer">
                <button className="checkoutBtnPreviusModal"onClick={this.handleClickPreviusStep}>Previous Step</button>
              </div>
            <div id="myModal" className="modal">
              <div className="modal-content">
                <span className="closeSpan" onClick={()=>this.closePaymentWindow()}>&times;</span>
                <div className="modalText">Your payment is in progress</div>
                <img id="start"className="modalImgStart"src="https://static.wixstatic.com/media/535978_c1fcda066ec74d2e8ef7c43b1f8197c9~mv2.gif"></img>
                <img id="end" className="modalImgEnd"src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"></img>               
                <div className="modalText">Our payments are handled by CrowTechPay</div>                
              </div>

            </div>
            
          </div>
        )
      }
    }else if(checkoutStepId == 5){
      if(localStorage.getItem('Veryfi')==null){
        return(
          <div>u should be loged in</div>
        )
        
      }else{
        return(
          
          <div className="checkoutContainer">
             {this.clearstateID()}
             <div className="checkoutBye">
                <div className="checkoutByeTitle" >Payment completed</div>
                <Link className= "linkbtnCheckout" href = "/">Return Home Page</Link> 
                <Link className= "linkbtnCheckout" href = "/profile">Go to Your profile Page</Link> 
          </div>
          </div>
         
        )
      }
    }
  }

}
