import React from 'react';

export default class ShopCartRender extends React.Component{
    

 
    render(){

       
        
        return(
            <div>
            <div class="row">
            <div class="col-75">
              <div class="container">
                <form>
                
                  <div class="row">
                    <div class="col-50">
                      <h3>Billing Address</h3>
                      <label htmlFor="fname"><i class="fa fa-user"></i> Full Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
                      <label htmlFor="email"><i class="fa fa-envelope"></i> Email</label>
                      <input type="text" id="email" name="email" placeholder="john@example.com"></input>
                      <label htmlFor="adr"><i class="fa fa-address-card-o"></i> Address</label>
                      <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
                      <label htmlFor="city"><i class="fa fa-institution"></i> City</label>
                      <input type="text" id="city" name="city" placeholder="New York"></input>
          
                      <div class="row">
                        <div class="col-50">
                          <label htmlFor="state">State</label>
                          <input type="text" id="state" name="state" placeholder="NY"></input>
                        </div>
                        <div class="col-50">
                          <label htmlFor="zip">Zip</label>
                          <input type="text" id="zip" name="zip" placeholder="10001"></input>
                        </div>
                      </div>
                    </div>
          
                    <div class="col-50">
                      <h3>Payment</h3>
                      <label htmlFor="fname">Accepted Cards</label>
                      <div class="icon-container">
                        <i class="fa fa-cc-visa" style={{"color":"navy"}}></i>
                        <i class="fa fa-cc-amex" style={{"color":"blue"}}></i>
                        <i class="fa fa-cc-mastercard" style={{"color":"red"}}></i>
                        <i class="fa fa-cc-discover" style={{"color":"orange"}}></i>
                      </div>
                      <label htmlFor="cname">Name on Card</label>
                      <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                      <label htmlFor="ccnum">Credit card number</label>
                      <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                      <label htmlFor="expmonth">Exp Month</label>
                      <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>
                      <div class="row">
                        <div class="col-50">
                          <label htmlFor="expyear">Exp Year</label>
                          <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                        </div>
                        <div class="col-50">
                          <label htmlFor="cvv">CVV</label>
                          <input type="text" id="cvv" name="cvv" placeholder="352"></input>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <label>
                    <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing</input>
                  </label>
                  <input type="submit" value="Continue to checkout" class="btn"></input>
                </form>
              </div>
            </div>
            <div class="col-25">
              <div class="container">
                <h4>Cart <span class="price" style={{"color":"black"}}><i class="fa fa-shopping-cart"></i> <b>4</b></span></h4>
                <div>Item 1</div>
                <div>Item 1</div>
                <div>Item 1</div>
                <hr></hr>
                <p>Total <span class="price" style={{"color":"black"}}><b>$30</b></span></p>
              </div>
            </div>
          </div>
          </div>
        )
    }
}