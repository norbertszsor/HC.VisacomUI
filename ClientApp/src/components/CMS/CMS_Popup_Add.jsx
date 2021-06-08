import { date } from "faker";
import React, { Component } from "react";
import AddRequest from "../../requests/Add_Request"

const ElementToReturn = props =>{
if(!props.show){
  return null;
}
const FormValues={};
const myChangeHandler=(event)=>{
  FormValues[event.target.name]=event.target.value
  if(event.target.name==props.ListaKey[0]){
    FormValues[props.ListaKey[0]]=parseInt(event.target.value)
  }
  if(event.target.name=="roleName"){
    FormValues["roleId"]=parseInt(event.target.value);
  }
}

  const handleSubmit=(event)=>{
    delete FormValues[props.ListaKey[0]];
    delete FormValues["roleName"];
      if(props.url=="api/account/"){FormValues["password"]="12345678";}
      if(props.url=="api/blog/"){
        let date = new Date(Date.now());
        FormValues["date"]= date;     
      } 
    console.log(FormValues);
    let resutl =AddRequest(FormValues,props.url);
    if(resutl){
      props.Close()
    }

    event.preventDefault();
  }


  const lista=[];
  if(props.ListaKey){
    props.ListaKey.forEach((element,index) => {
      FormValues[element]=props.ListaVal[index];
      lista.push(
        <div>
        <label className="CMS_Label">{element}</label>
        <input type="text" className="CMS_input" defaultValue={props.ListaVal[index]} name={element} onChange={myChangeHandler}></input>
        </div>           
      );})}


    return(

      <div id="PopUp"> 

        <div id="PopUpTitle">Dodaj</div>

        <form onSubmit={handleSubmit}>
        <div id="contert">{lista}</div>
        <input type="submit" id="CMS_Popup_Send" value="Send"></input>
        </form>
        
        <input id="CMS_Popup_Close" value="Close" type="button" onClick={props.Close}></input>
      </div>
    );
}

export default ElementToReturn;