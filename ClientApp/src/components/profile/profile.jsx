import React from 'react';
import faker from "faker";
import "./profile.css"

export default class Profile extends React.Component{
   
    state = {

       UserData: null,
    }
    
    async componentDidMount(){
        const key =localStorage.getItem('Veryfi');
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "Bearer "+ key}
        }
        const apiUrl = "https://okiplants.azurewebsites.net/api/account/Details";
        const rensponse = await fetch(apiUrl,requestOptions);
        const data = await rensponse.json();
        this.setState({UserData: JSON.parse(JSON.stringify(data))});
        console.log(this.state.UserData);
    }
      
    render() {
        
        if(!this.state.UserData){
            return(<div>object is null</div>);
        }
        if(this.state.UserData){
            
        }
        //{"email":"admin@gmail.com","firstName":"Visa","lastName":"Com","phoneNumber":"123456789","role":"Admin"}
        return(
            
            <div className="ProfileContainer">

                <div id="ProfilePicContainer">
                <div id="ProfilePic"></div>
                {this.state.UserData.firstName}{" "}{this.state.UserData.lastName}
                </div>

                <div id="ProfileInfo">
                    <h2>Info</h2>
                <div className="ProfileInfoFloatie">
                   <div className="ProfileInfoFloatie3">First Name: {this.state.UserData.firstName}</div>
                   <div className="ProfileInfoFloatie3"> Last Name: {this.state.UserData.lastName}</div>
                </div>
                <div className="ProfileInfoFloatie2">
                <div className="ProfileInfoFloatie3"> Email: {this.state.UserData.email}</div>
                <div className="ProfileInfoFloatie3">Phone Number: {this.state.UserData.phoneNumber}</div>
                </div>
                </div>
            </div>
        )
    }
}

