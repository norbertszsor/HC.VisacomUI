import React from 'react';
import Link from '../navMenu/Link';
import './navMenu.css';

const NavMenu = () => {
    return(

    <div className="topnav">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/blog">Blog</Link>

            <Link href="/">Maps</Link>


            <input type="text" placeholder="Search.."></input>
            <div className="topanvRight"style={{"float":"right"}}>
                <Link href="/login" style={{"float":"right"}}>Login</Link> 
                <Link href="/register" style={{"float":"right"}}>Register</Link>         
            </div>
            
    </div>

    );

    

}

export default NavMenu;