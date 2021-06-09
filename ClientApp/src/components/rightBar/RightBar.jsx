import React from 'react';
import Faker from 'faker';
import ContactForm from './ContactForm';
import Link from '../navMenu/Link';






export default class RightBarFetch extends React.Component{
   
    state = {
       productData: null,
    }
    
    async componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *"}
        }
        const apiUrl = "https://okiplants.azurewebsites.net/api/products/norbeczka";
        const rensponse = await fetch(apiUrl,requestOptions);
        const data = await rensponse.json();
        
        this.setState({productData: JSON.parse(JSON.stringify(data))});
        console.log(this.state.productData);
    }
    handleClick = (index) =>{
        var carData = [];
        if(localStorage.getItem("cartData")!=null){
            carData = JSON.parse(localStorage.getItem("cartData"));
            // cartData.push({
            //     itemName: this.state.productData[index].name,
            //     quantity: 1,
            //     itemStock: this.state.productData[index].amount,
            //     imageUrl: this.state.productData[index].pictureURL,
            //     id:this.state.productData[index].id,
            //     price:this.state.productData[index].price,
            // });
        }
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
            
            this.state.productData.forEach((element,index) =>{
               itemList.push(
                <div className="fakeimg">
                    <div className="popularPlantsText">Best! Rating {element.stars}/5</div>
                    <Link className= "popularPlantsBuy" href = "/checkout">Buy Now!</Link>
                    <img src={element.pictureURL} alt="" className="PopularPlantsImg"/>
                    <div className="leftStock">Only {element.amount} left</div>
                </div>
               )
                
            });
        }
        
        return(
            
            <div className="rightcolumn">
            <div className="card">
                <div className="popularTitle">Popular Plants</div>
                {itemList}
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