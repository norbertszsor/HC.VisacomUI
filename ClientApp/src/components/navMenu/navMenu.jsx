import React from 'react';
import Link from '../navMenu/Link';
import './navMenu.css';

const Logout=()=>{
    localStorage.removeItem('Veryfi');
    window.location.reload(false);
}
export default class NavMenu extends React.Component{
    

    render(){

        if(localStorage.getItem('Veryfi')!=null){
         return(
            <div className="topnav">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/map">Maps</Link> 
            <div onClick={Logout} className="topanvRight"style={{"float":"right"}}>
            <Link href="/">Logout</Link>        
            </div>
            <input type="text" placeholder="Search.."></input>            
            </div>
         )   
        }
    return(
    <div className="topnav">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/map">Maps</Link>
            <input type="text" placeholder="Search.."></input>
            <div className="topanvRight"style={{"float":"right"}}>
                <Link href="/login" style={{"float":"right"}}>Login</Link> 
                <Link href="/register" style={{"float":"right"}}>Register</Link>         
            </div>            
    </div>
    );
    }
    

}