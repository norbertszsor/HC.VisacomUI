import React, { useState } from "react";

export default async function RegisterRequest (email,password,confirmPassword,firstName,lastName,phoneNumber){
        const apiUrl = "https://okiplants.azurewebsites.net/api/account/register";
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
       if (!resp.ok) {
        window.alert("Coś Poszło nie tak");
        }
        else{
            window.history.pushState({}, '', "/");
            await window.location.reload(false);
        }
       
            
    }