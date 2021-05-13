import React from 'react';
import faker from "faker";
import ShopElement from "./ShopElement";
import "./shop.css";


export default class DataProductFetch extends React.Component{
    
    
    state = {
       productData: null,
    }
    
    async componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json' }
        }
        const apiUrl = "https://localhost:5001/api/products";
        const rensponse = await fetch(apiUrl,requestOptions);
        const data = await rensponse.json();
        
        this.setState({productData: JSON.parse(JSON.stringify(data))});
        console.log(this.state.productData);
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
            
            <div className="ShopContainer">
            {
            this.state.productData.forEach((element,index) => {
                console.log(this.state.productData[index].name);
                console.log(this.state.productData[index].price);
                itemList.push(                 
                        <ShopElement 
                            plantImage={faker.image.nature()}
                            plantName ={this.state.productData[index].name}
                            plantPrice = {this.state.productData[index].price}                    
                        />
                    );
                console.log(itemList);
               
            })}
            <div>
                {itemList}
            </div>
               
            

            {console.log(this.state.productData)}
        </div>
        )
    }
}

