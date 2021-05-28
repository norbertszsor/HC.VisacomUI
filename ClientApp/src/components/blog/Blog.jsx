import { render } from '@testing-library/react';
import React from 'react';
import BlogElements from '../blogElements/BlogElements';
import "../blog/blog.css";

export default class Blog extends React.Component {
    
    state = {
        productData: null,
     }

    async componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *"}
        }
        const apiUrl = "https://okiplants.azurewebsites.net/api/blog";
        const rensponse = await fetch(apiUrl,requestOptions);
        const data = await rensponse.json();         
        this.setState({productData: JSON.parse(JSON.stringify(data))});
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
                {this.state.productData.forEach((element,index) => {
                itemList.push(                 
                <BlogElements data={this.state.productData[index]}/>
                    )})}
                    {itemList}
            </div>
    );}
}
