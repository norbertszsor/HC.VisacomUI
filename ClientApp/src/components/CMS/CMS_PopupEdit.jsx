import React, { Component } from "react";
import EditRequest from "../../requests/Edit_Request"

const ElementToReturn = props =>{
if(!props.show){
  return null;
}
const FormValues={};

const myChangeHandler=(event)=>{
  FormValues[event.target.name]=event.target.value
  FormValues[props.ListaKey[0]]=props.ListaVal[0]
}

  const handleSubmit=(event)=>{
    
    let resutl =EditRequest(props.ListaVal[0],FormValues,props.url)
    console.log(JSON.stringify(FormValues));
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

        <div id="PopUpTitle">Edytuj</div>

        <form onSubmit={handleSubmit}>
        <div id="contert">{lista}</div>
        <input type="submit" id="CMS_Popup_Send" value="Send"></input>
        </form>
        
        <input id="CMS_Popup_Close" value="Close" type="button" onClick={props.Close}></input>
      </div>
    );
}

export default ElementToReturn;