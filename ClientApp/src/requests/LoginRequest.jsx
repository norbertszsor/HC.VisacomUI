import React, { useState } from "react";

export default async function LoginRequest (email,password){
        const apiUrl = "https://okiplants.azurewebsites.net/api/account/login";
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
             "email": email,
            "password":password}
            )        
        };

       const resp= await fetch(apiUrl, requestOptions)
       const key = await resp.text();
       if (!resp.ok) {
        window.alert("Złe Dane");
        }
        else{
            await localStorage.setItem('Veryfi',key);
            window.history.pushState({}, '', "/");
            await window.location.reload(false);
        }

    }