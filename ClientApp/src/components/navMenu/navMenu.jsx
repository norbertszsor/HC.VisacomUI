import React from 'react';
import Link from '../navMenu/Link';
const NavMenu = () => {
    return(

    <div className="topnav">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Maps</Link>
            <div style={{"float":"right"}}>
                <Link href="/login" style={{"float":"right"}}>Login</Link> 
                <Link href="/register" style={{"float":"right"}}>Register</Link>         
            </div>
            
    </div>

    );

    

}

export default NavMenu;