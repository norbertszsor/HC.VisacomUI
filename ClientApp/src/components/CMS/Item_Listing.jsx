import React from "react";
import CMSItem from './CMS_item';

export default class CMSListing extends React.Component{
 
    state = {
        productData: null,
     }
     async componentWillReceiveProps(nextProps) {
        const key =localStorage.getItem('Veryfi');
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "bearer "+ key }
        }
        const apiUrl = "https://okiplants.azurewebsites.net/"+nextProps.url;
        const rensponse = await fetch(apiUrl,requestOptions);
        const data = await rensponse.json();         
        this.setState({productData: JSON.parse(JSON.stringify(data))});
        console.log("udało sie");
    }
     async componentDidMount(){
         const key =localStorage.getItem('Veryfi');
         const requestOptions = {
             method: 'GET',
             headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "bearer "+ key }
         }
         const apiUrl = "https://okiplants.azurewebsites.net/"+this.props.url;
         const rensponse = await fetch(apiUrl,requestOptions);
         const data = await rensponse.json();         
         this.setState({productData: JSON.parse(JSON.stringify(data))});
         console.log("udało sie");
     }
     render(){
        const itemList = [];
        if(this.state.isLoading){
          return(<div>loading</div>);
      }
      if(!this.state.productData){
          return(<div>object is null</div>);
      }

          return(  
            <div className="CMS_Listing">

            {this.state.productData.forEach((element,index) => {
            itemList.push(                 
               <CMSItem data={this.state.productData[index]}/>
                 )})}
                  {itemList}
          </div>             
    );
      }

}
