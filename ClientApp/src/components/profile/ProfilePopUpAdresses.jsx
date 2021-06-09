import React from 'react';
import "../blog/blog.css";


export default class AdressesPop extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            close : props.close,
            data: props.data,
        }
    }
    
    render(){
    const FormValues={};
    const myChangeHandler=(event)=>{
        FormValues[event.target.name]=event.target.value
    }
    const ItemList=[]
    const Ferch=async(obiekt)=>{
        const key =localStorage.getItem('Veryfi');
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "bearer "+ key },
            body: JSON.stringify(obiekt)
        }
        const apiUrl = "https://okiplants.azurewebsites.net/api/address/add";
        const rensponse = await fetch(apiUrl,requestOptions);
        console.log(rensponse);
        if (rensponse.ok) {
            this.state.close();
        }
    }
    const FerchDelete=async(obiekt)=>{
        const key =localStorage.getItem('Veryfi');
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "bearer "+ key },
            body: JSON.stringify(obiekt)
        }
        const apiUrl = "https://okiplants.azurewebsites.net/api/address/delete/"+obiekt.id;
        const rensponse = await fetch(apiUrl,requestOptions);
        console.log(rensponse);
        if (rensponse.ok) {
            this.state.close();
        }
    }
    return (
        
        <div className="PoPUpContainer" >
            {this.state.data.forEach(element => {
                ItemList.push(<div className="AdressContainer">
                {element.town}{" "}
                {element.street}{" "}
                {element.houseNumber}{" "}
                {element.postalCode}{" "}
                <div className="ProfilePopUpButtonDelete" onClick={()=>FerchDelete(element)}>-</div>
                </div>
                )
            })}
            {ItemList}
                    <div className="PoPUpFormContainer" >
            <form>
            <div className="ProfilePopUpLabel">Town</div>
            <input type="text" onChange={myChangeHandler} name="town" className="Edit_input" ></input>
            <div className="ProfilePopUpLabel">Street</div>
            <input type="text" onChange={myChangeHandler} name="street" className="Edit_input" ></input>
            <div className="ProfilePopUpLabel">House Number</div>
            <input type="text" onChange={myChangeHandler} name="houseNumber" className="Edit_input" ></input>
            <div className="ProfilePopUpLabel">Postal Code</div>
            <input type="text" onChange={myChangeHandler} name="postalCode" className="Edit_input" ></input>
            </form>
                    </div>
            
            <div className="ProfilePopUpButton"  onClick={this.state.close}>Close</div>
            <div className="ProfilePopUpButton" onClick={()=>Ferch(FormValues)}>Dodaj</div>
        </div>
        
    );
        }
}