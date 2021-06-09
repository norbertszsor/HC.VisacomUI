import React from 'react';
import "../blog/blog.css";

const BlogElements = props => {
    const FormValues={ 
    "firstName": props.data.firstName,
    "lastName": props.data.lastName,
    "phoneNumber": props.data.phoneNumber
};

const myChangeHandler=(event)=>{
  FormValues[event.target.name]=event.target.value
}
const Ferch=async(obiekt)=>{
    const key =localStorage.getItem('Veryfi');
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "bearer "+ key },
        body: JSON.stringify(obiekt)
    }
    const apiUrl = "https://okiplants.azurewebsites.net/api/account/EditProfile";
    const rensponse = await fetch(apiUrl,requestOptions);
    console.log(rensponse);
    if (rensponse.ok) {
        props.close();
    }
}

    return (
        
        <div className="PoPUpContainer" >
            <form>
            <div className="ProfilePopUpLabel">First Name</div>
            <input type="text" onChange={myChangeHandler} name="firstName" className="Edit_input" defaultValue={props.data.firstName}></input>
            <div className="ProfilePopUpLabel">Last Name</div>
            <input type="text" onChange={myChangeHandler} name="lastName" className="Edit_input" defaultValue={props.data.lastName}></input>
            <div className="ProfilePopUpLabel">Phone Number</div>
            <input type="text" onChange={myChangeHandler} name="phoneNumber" className="Edit_input" defaultValue={props.data.phoneNumber}></input>
            </form>
            <div className="ProfilePopUpButton" onClick={props.close}>Close</div>
            <div className="ProfilePopUpButton" onClick={()=>Ferch(FormValues)}>Send</div>
            
        </div>
    
    );

}
export default BlogElements;