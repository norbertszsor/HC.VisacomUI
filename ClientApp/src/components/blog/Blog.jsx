import { render } from '@testing-library/react';
import React from 'react';
import BlogElements from '../blogElements/BlogElements';
import "../blog/blog.css";

//pasek szukania
export default class Blog extends React.Component {
    
    state = {
        productData: null,
        idPodstrony:0
     }

    async componentDidMount(){
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin':" *"}
        }
        const apiUrl = "https://okiplants.azurewebsites.net/api/blog";
        const rensponse = await fetch(apiUrl,requestOptions);
        const data = await rensponse.json();         
        this.setState({productData: JSON.parse(JSON.stringify(data)).sort()});

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
                {this.state.productData.reverse().slice(this.state.idPodstrony,this.state.idPodstrony+4).forEach((element,index) => {
                itemList.push(                 
                <BlogElements data={this.state.productData[index]}/>
                    )})}
                    {itemList}
                    <button className="BlogPostControl" onClick={()=>{if(this.state.productData.length>3)this.setState({idPodstrony : this.state.idPodstrony+4})}}>Older Post</button>
                    <button className="BlogPostControl" onClick={()=>{if(this.state.idPodstrony>0)this.setState({idPodstrony : this.state.idPodstrony-4})}}>Newer Post</button>
            </div>
    );}
}
