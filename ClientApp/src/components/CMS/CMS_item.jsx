import React,{useState} from "react";
import EditPopUp from './CMS_PopupEdit';
import DelPopUp from './CMS_Popup_Delete';


const ElementToReturn = props =>{


  const valuelist = Object.values(props.data);
  const keylist = Object.keys(props.data);
  var disc=""
  valuelist.forEach((element,index) => {
    disc=disc+keylist[index]+" : "+valuelist[index]+" | ";
  })

  const [show,setShow]=React.useState(false);
  const [show2,setShow2]=React.useState(false);
  var modal=<EditPopUp show={show} Close={()=>setShow(false)} ListaVal={valuelist} ListaKey={keylist} url={props.url} />
  var modal2=<DelPopUp show={show2} Close={()=>setShow2(false)} ListaVal={valuelist} url={props.url}/>
  const Edit=()=>{ 
    setShow(true);
    }
    const Del=()=>{ 
               setShow2(true);
        }

    return(

      <div className="CMS_Item">
        {disc}
      <div className="CMSdelete"onClick={Del}></div>
      <div className="CMSedit" onClick={Edit}></div>
      {modal}
      {modal2}
      </div>
    );
}

export default ElementToReturn;