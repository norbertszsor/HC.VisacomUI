import React from 'react';
import Faker from 'faker';
import "../blog/blog.css";

const BlogElements = props => {

    const FormValues={};

const myChangeHandler=(event)=>{
  FormValues[event.target.name]=event.target.value
}

    const Ferch=async(obiekt)=>{
        const key =localStorage.getItem('Veryfi');
        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "bearer "+ key },
            body: JSON.stringify(obiekt)
        }
        const apiUrl = "https://okiplants.azurewebsites.net/api/account/changepassword";
        const rensponse = await fetch(apiUrl,requestOptions);
        console.log(rensponse);
        if (rensponse.ok) {
            props.close();
        }
    }
    return (
        
        <div className="PoPUpContainer" >
            <form>
            <div className="ProfilePopUpLabel">New Password</div>
            <input name="newPassword" type="password" className="Edit_input" onChange={myChangeHandler} ></input>
            <div className="ProfilePopUpLabel">Confirm New Password</div>
            <input name="confirmNewPassword" type="password" className="Edit_input" onChange={myChangeHandler} ></input>
            <div className="ProfilePopUpLabel">Old Passwrod</div>
            <input name="oldPassword" type="password" className="Edit_input" onChange={myChangeHandler}></input>
            </form>
            <div className="ProfilePopUpButton" onClick={props.close}>Close</div>
            <div className="ProfilePopUpButton" onClick={()=>Ferch(FormValues)}>Send</div>
        </div>
    
    );

}
export default BlogElements;