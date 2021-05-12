import React, { useState } from "react";

export default async function LoginRequest (setToken,email,password){
        const apiUrl = "https://localhost:5001/api/account/login";
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' }, 
            body: JSON.stringify({
             "email": email,
            "password":password}
            )        
        };
       const resp= await fetch(apiUrl, requestOptions)
       const key = await resp.text();
       setToken(key);
       localStorage.setItem('Veryfi',key);
       
            
    }