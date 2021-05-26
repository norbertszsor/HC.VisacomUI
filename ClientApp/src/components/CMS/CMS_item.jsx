import React from "react";


const ElementToReturn = props =>{
  const valuelist = Object.values(props.data);
  const keylist = Object.keys(props.data);
  var disc=""
  valuelist.forEach((element,index) => {
    disc=disc+keylist[index]+" : "+valuelist[index]+" | ";
  })

  
    return(

      <div className="CMS_Item">
        {disc}
      <div className="CMSdelete"></div>
      <div className="CMSedit"></div>
      </div>
    );
}

export default ElementToReturn;