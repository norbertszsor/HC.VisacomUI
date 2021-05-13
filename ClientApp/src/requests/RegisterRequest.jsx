import React, { useState } from "react";

export default async function RegisterRequest (email,password,confirmPassword,firstName,lastName,phoneNumber){
        const apiUrl = "https://localhost:5001/api/account/register";
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' }, 
            body: JSON.stringify({
                "email": email,
                "password": password,
                "confirmPassword": confirmPassword,
                "firstName": firstName,
                "lastName": lastName,
                "phoneNumber": phoneNumber,}
            )        
        };
       const resp= await fetch(apiUrl, requestOptions);
       console.log(resp);
       
            
    }