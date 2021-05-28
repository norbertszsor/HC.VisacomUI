import React from 'react';
import Faker from 'faker';
import ContactForm from './ContactForm';






export default class RightBarFetch extends React.Component{
   
    state = {
       productData: null,
    }
    
    async componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *"}
        }
        const apiUrl = "https://okiplants.azurewebsites.net/api/products";
        const rensponse = await fetch(apiUrl,requestOptions);
        const data = await rensponse.json();
        
        this.setState({productData: JSON.parse(JSON.stringify(data))});
        //console.log(this.state.productData);
    }
      
    render() {
        
        const itemList = [];
        
        if(this.state.isLoading){
            return(<div>loading</div>);
        }
        if(!this.state.productData){
            return(<div>object is null</div>);
        }
        if(this.state.productData){
            
        }
        return(
            
            <div className="rightcolumn">
            <div className="card">
                <h3>Popular Plants</h3>
                <div className="fakeimg">
                    <div className="popularPlantsText">BestSeller !</div>
                    <img src={this.state.productData[21].pictureURL} alt="" className="PopularPlantsImg"/>
                </div>
                <div className="fakeimg">
                    <div className="popularPlantsText">BestSeller !</div>
                    <img src={this.state.productData[13].pictureURL} alt="" className="PopularPlantsImg"/>
                </div>
                <div className="fakeimg">
                    <div className="popularPlantsText">BestSeller !</div>
                    <img src={this.state.productData[19].pictureURL} alt="" className="PopularPlantsImg"/>
                </div>
            </div>
            <div className="card">
                <h3>Contact Us</h3>
                <ContactForm/>
            </div>
            
            <div className="card">
                <h3>Our Gallery</h3>
                <p>{Faker.random.words(5)}</p>
            </div>
            </div>
        )
    }
}