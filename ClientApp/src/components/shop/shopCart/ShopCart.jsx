import React from 'react';
import '../shop.css';

function openForm(){
    document.getElementById("myForm").style.display = "block";
}
function closeForm(){
    document.getElementById("myForm").style.display = "none";
}


const ElementToReturn = () =>{
    return(
        <div>
        <button className="open-button" onClick={()=>openForm()}>Show Cart</button>
            <div className="form-popup" id="myForm">
                <form action="/action_page.php" className="form-container">
                <h2>Your Cart</h2>
            
                <label className="item"><b>Item</b></label>
                <br></br>
                <label className="item"><b>Item</b></label>
                <br></br>
                <label className="item"><b>Item</b></label>
                <br></br>
                <label className="item"><b>Item</b></label>
                
                
         
            
                
               
            
                <button type="submit" className="btn">Checkout</button>
                <button type="button" className="btn cancel" onClick={()=>closeForm()}>Close Preview</button>
                </form>
            </div> 
        </div>
        
    );
}

export default ElementToReturn;