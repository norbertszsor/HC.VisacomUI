import React from "react";
import CMSItem from './CMS_item.jsx';
import CMS_Add_Box from './CMS_Listing_Pop';



export default class CMSListing extends React.Component{

        constructor(props) {
          super(props);
          this.handleClick = this.handleClick.bind(this);
         }


    state = {
        productData: null,
     }
     async handleClick() {  
      const key =localStorage.getItem('Veryfi');
      const requestOptions = {
          method: 'GET',
          headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *","Authorization": "bearer "+ key }
      }
      const apiUrl = "https://okiplants.azurewebsites.net/"+this.props.url;
      const rensponse = await fetch(apiUrl,requestOptions);
      const data = await rensponse.json();         
      this.setState({productData: JSON.parse(JSON.stringify(data))});
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
         console.log(rensponse);
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
            <div>
            <CMS_Add_Box url={this.props.url} data={this.state.productData[0]}/>
            <div className="CMS_Refresh" onClick={this.handleClick}></div>
            <div className="CMS_Listing">

            {this.state.productData.forEach((element,index) => {
            itemList.push(                 
               <CMSItem url={this.props.url} data={this.state.productData[index]}/>
                 )})}
                  {itemList}
          </div>        
          </div>     
    );
      }

}