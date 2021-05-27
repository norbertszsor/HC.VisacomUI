import React, { Component } from "react";
import DeleteRequest from "../../requests/Delete_Request";

const ElementToReturn = props =>{
if(!props.show){
  return null;
}

  const handleSubmit=(event)=>{
    let resutl = DeleteRequest(props.ListaVal[0],props.url)
    if(resutl){
      props.Close()
    }

    event.preventDefault();
  }
    return(

      <div id="PopUp"> 

        <div id="PopUpTitle">Usuń</div>
        <input type="submit" id="CMS_Popup_Send" value="Tak" onClick={handleSubmit}></input>
        <input id="CMS_Popup_Close" value="Close" type="button" onClick={props.Close}></input>
      </div>
    );
}

export default ElementToReturn;