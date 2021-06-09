import React from 'react';
import faker from "faker";
import ProfileOrder from "./profileOrder"
import "./profile.css"
import PopUpEdit from "./ProfilePopUpEdit"
import PopUpPassword from "./ProfilePopUpPassword"
import PopUpAdesses from "./ProfilePopUpAdresses"



export default class Profile extends React.Component{
   
    state = {

       UserData: null,
       PopUp:null
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
        //////////////////////////////////////Orders
        const requestOptions2 = {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "Bearer "+ key}
        }
        const apiUrl2 = "https://okiplants.azurewebsites.net/api/account/myorders";
        const rensponse2 = await fetch(apiUrl2,requestOptions2);
        const data2 = await rensponse2.json();
        this.setState({UserOrders: JSON.parse(JSON.stringify(data2))});
        //////////////////////////////////Adres
        const requestOptions3 = {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "Bearer "+ key}
        }
        const apiUrl3 = "https://okiplants.azurewebsites.net/api/address/getmyaddresses";
        const rensponse3 = await fetch(apiUrl3,requestOptions3);
        const data3 = await rensponse3.json();
        this.setState({UserAdress: JSON.parse(JSON.stringify(data3))});
        console.log(data3)
    }
      
    render() {
        
        if(!this.state.UserData){
            return(<div>object is null</div>);
        }
        if(!this.state.UserAdress){
            this.setState({UserAdress: [{ 
            "town": "brak",
            "street": "brak",
            "houseNumber": "brak",
            "postalCode": "brak"
        },
        ]});
        }
        if(!this.state.UserOrders){
            return(<div>object is null</div>);
        }
        if(this.state.UserData){
            
        }
        const ShopPopUpEdit=()=>{
            this.setState({PopUp: <PopUpEdit data={this.state.UserData} close={Close}/>});
        }
        const ShopPopUpPassword=()=>{
            this.setState({PopUp: <PopUpPassword close={Close} />});
        }
        const ShopPopUpAdresses=()=>{
            this.setState({PopUp: <PopUpAdesses data={this.state.UserAdress} close={Close} />});
        }
        const Close=()=>{
            this.setState({PopUp: ""});
            this.componentDidMount();
        }
        const itemList=[];
        return(
            
            <div className="ProfileContainer">

                <div id="ProfilePicContainer">
                <div id="ProfilePic"></div>
                {this.state.UserData.firstName}{" "}{this.state.UserData.lastName}
                </div>


                <div id="ProfileInfo">
                    <h2>Info</h2>
                <div className="ProfileInfoFloatie">
                   <div onClick={ShopPopUpEdit} className="ProfileInfoFloatie3">First Name: {this.state.UserData.firstName}</div>
                   <div onClick={ShopPopUpEdit} className="ProfileInfoFloatie3"> Last Name: {this.state.UserData.lastName}</div>
                   <div onClick={ShopPopUpPassword} className="ProfileInfoFloatie3"> Password: ********</div>
                </div>
                <div className="ProfileInfoFloatie2">
                <div className="ProfileInfoFloatie3"> Email: {this.state.UserData.email}</div>
                <div onClick={ShopPopUpEdit} className="ProfileInfoFloatie3">Phone Number: {this.state.UserData.phoneNumber}</div>
                <div onClick={ShopPopUpAdresses}className="ProfileInfoFloatie3">adress: Ul. {this.state.UserAdress[0].street} {this.state.UserAdress[0].houseNumber}</div>
                </div>
                </div>

                <div className="ProfileOrders">
                    <div className="ProfileOrdersNapis">Orders:</div>
                    <div className="ProfileOrdersBorders">
                {this.state.UserOrders.forEach((element,index) => {
            itemList.push(                 
               <ProfileOrder data={this.state.UserOrders[index]}/>
                 )})}
                  {itemList}
                </div>
                </div>
                {this.state.PopUp}
            </div>
        )
    }
}

