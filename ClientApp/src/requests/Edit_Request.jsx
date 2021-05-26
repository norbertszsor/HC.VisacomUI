import React, { useState } from "react";

export default async function EditRequest (id,obiekt,url){
    const key =localStorage.getItem('Veryfi');
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "bearer "+ key },
        body: JSON.stringify(obiekt)
    }
    const apiUrl = "https://okiplants.azurewebsites.net/"+url+id;
    const rensponse = await fetch(apiUrl,requestOptions);
    console.log(rensponse);
    if(rensponse.ok){
    return true;
    }
    else{
        alert("Coś Poszło nie tak");
       
    }
    }