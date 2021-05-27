import React, { useState } from "react";

export default async function AddRequest (obiekt,url){
    const key =localStorage.getItem('Veryfi');
    const requestOptions = {
        method: 'POST',
        headers: {'accept': '*/*','Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "Bearer "+ key },
        body: JSON.stringify(obiekt)
    }
    
    const apiUrl = "https://okiplants.azurewebsites.net/"+url+"add";
    const rensponse = await fetch(apiUrl,requestOptions);
    if(rensponse.ok){
    return true;
    }
    else{
        alert("Coś Poszło nie tak");
    }
    }