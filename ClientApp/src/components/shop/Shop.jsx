import React from 'react';
import faker from "faker";
import ShopElement from "./ShopElement";
import ShopCart from "./shopCart/ShopCart";
import "./shop.css";


export default class DataProductFetch extends React.Component{
   
    state = {
       productData: null,
       groupBy: "name",
       sortBy: "",
       sortDirection: 0,
    }

    async componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *"}
        }
        const apiUrl = "https://okiplants.azurewebsites.net/api/products?ProductName="+this.state.sortBy+"&SortBy="+this.state.groupBy+"&SortDirection="+this.state.sortDirection;
        const rensponse = await fetch(apiUrl,requestOptions);
        const data = await rensponse.json();
        
        this.setState({productData: JSON.parse(JSON.stringify(data))});
        console.log(rensponse);
    }

    
    handeGroupBy = e =>{
        if(e.target.value!=null){
            this.setState({groupBy: e.target.value},this.componentDidMount);      
        }
      }
    handeSortDirection = e =>{
        if(e.target.value!=null){
          this.setState({sortDirection: e.target.value},this.componentDidMount);
        }
      }
    
    handleSearch = e =>{
        if(e.target.value!=null){
            this.setState({sortBy: e.target.value},this.componentDidMount);
        }
    }
    render() {
        console.log(this.state.sortBy);
        const itemList = [];
        if(this.state.isLoading){
            return(<div>loading</div>);
        }
        if(!this.state.productData){
            return(<div>retriving data from server</div>);
        }
        if(this.state.productData){
            return(      
                <div className="ShopContainer">
                <ShopCart />
                {
                this.state.productData.forEach((element,index) => {
                    //console.log(this.state.productData[index].name);
                    //console.log(this.state.productData[index].price);
                    if(this.state.productData[index].amount>0){
                        itemList.push(                 
                            <ShopElement
                                plantImage={this.state.productData[index].pictureURL}
                                plantName ={this.state.productData[index].name}
                                plantPrice = {this.state.productData[index].price}
                                plantStockInfo = {this.state.productData[index].amount}
                                plantStory = {this.state.productData[index].description}
                                plantID = {this.state.productData[index].id}      
                                plantRating =  {this.state.productData[index].stars}              
                            />
                        );
                    }
                    
                    //console.log(itemList);
    
                   
                })}
                <div>
                    <div className="selectShopContainer">
                        <input className="selectSearchInput"type="text" value={this.state.value} onChange={this.handleSearch} placeholder="Search by Name.."></input>
                        Sort By:
                        <select className="selectSearch" onChange={this.handeGroupBy}>
                            <option className="selectShopOption" value="name">Name</option>
                            <option className="selectShopOption" value="price">Price</option>
                            <option className="selectShopOption" value="amount">Amount</option>
                        </select>
                        Sort Direction:
                        <select className="selectSearch" onChange={this.handeSortDirection}>
                            <option className="selectShopOption" value="0">Ascending</option>
                            <option className="selectShopOption" value="1">Descending</option>
                        </select>
                    </div>
                    {itemList}
                </div>
    
            </div>
            )
        }
        
    }
}

