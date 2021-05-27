import React, { useState } from "react";

export default async function DeleteRequest (id,url){
    const key =localStorage.getItem('Veryfi');
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "bearer "+ key },
    }
    
    const apiUrl = "https://okiplants.azurewebsites.net/"+url+"delete/"+id;
    const rensponse = await fetch(apiUrl,requestOptions);
    if(rensponse.ok){
    return true;
    }
    else{
        alert("Coś Poszło nie tak");
    }
    }