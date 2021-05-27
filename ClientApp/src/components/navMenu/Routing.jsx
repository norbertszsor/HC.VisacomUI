import React from 'react';
import Login from '../login/login';
import Register from '../register/register';
import Route from '../Route';
import BlogElemets from '../blogElements/BlogElements';
import Shop from '../shop/Shop'
import Blog from '../blog/Blog';
import CMS from '../CMS/CMS';
import Checkout from '../shop/checkout/checkout'



export default class Routing extends React.Component{
    
        
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
          return(<div></div>);
      }

        return(
        <div>

            <Route path="">
                <BlogElemets data={this.state.productData[0]}/>
            </Route>

            <Route path="/">
                <BlogElemets data={this.state.productData[0]}/>
            </Route>
            <Route path="/blog">
                <Blog/>
            </Route>

            <Route path="/login">
            <Login/>
            </Route>

            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/shop">
                <Shop/>
            </Route>
            <Route patg="/checkout">
                <Checkout/>
            </Route>

            <Route path="/CMS">
                <CMS/>
            </Route>

        </div>
        
    )
    }
}