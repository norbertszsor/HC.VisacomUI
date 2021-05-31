import React from 'react';
import Link from '../navMenu/Link';
import './navMenu.css';

const Logout=()=>{
    localStorage.removeItem('Veryfi');
    window.location.reload(false);
}
export default class NavMenu extends React.Component{
    
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
       

    render(){


        var profileOptions="";
        
        var rigthSide=(
        <div className="topanvRight"style={{"float":"right"}}>
        <Link href="/login" style={{"float":"right"}}>Login</Link> 
        <Link href="/register" style={{"float":"right"}}>Register</Link>         
        </div> 
        );
    if(this.state.UserData){
              
        if(localStorage.getItem('Veryfi')!=null){
            if(this.state.UserData.role=="Admin")
            {
                profileOptions=(<Link href="/CMS">Panel Admina</Link>);
            }
            if(this.state.UserData.role=="Blogger")
            {
                profileOptions=(<Link href="/CMS">Zarządzaj Blogiem</Link>);
            }
            if(this.state.UserData.role=="Warehouseman")
            {
                profileOptions=(<Link href="/CMS">Magazyn</Link>);
            }

        rigthSide=( 
        <div>
        <div onClick={Logout} className="topanvRight"style={{"float":"right"}}>
        <Link href="/">Logout</Link>       
        </div>
        <div className="topanvRight"style={{"float":"right"}}>
        <Link href="/profile" style={{"float":"right"}}>Profile</Link> 
        {profileOptions}      
        </div>
        </div>)

        }
    }
        
    return(
    <div className="topnav">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/map">Maps</Link>
            {rigthSide}
    </div>
    );
    }
    

}