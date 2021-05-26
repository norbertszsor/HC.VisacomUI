import React,{useState} from "react";
import CMS_Add from './CMS_Popup_Add';



const ElementToReturn = props =>{


  const valuelist = Object.values(props.data);
  const keylist = Object.keys(props.data);

  const [show,setShow]=React.useState(false);
  var modal=<CMS_Add show={show} Close={()=>setShow(false)} ListaVal={valuelist} ListaKey={keylist} url={props.url} />
  const Edit=()=>{ 
    setShow(true);
    }

    return(
        <div>
       <div className="CMS_Add" onClick={Edit}></div>
       {modal}
       </div>
    );
}

export default ElementToReturn;