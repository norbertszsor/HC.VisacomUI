import React from 'react';
import './CMS.css';
import CMSItem from './CMS_item';
import ItemListing from'./Item_Listing';

export default class CMS extends React.Component{
  
  constructor(props) {
    super(props);
    this.change = this.changeHandler.bind(this);
  }
  state = {
    SelectedUrl: <ItemListing url={"api/account/manage/getusers"} />,
    }
    changeHandler = e =>{
      if(e.target.value=="Products"){
        this.setState({SelectedUrl : <ItemListing url={"api/products"} />});}
      else if(e.target.value=="Users"){
        this.setState({SelectedUrl : <ItemListing url={"api/account/manage/getusers"} />});}
        else if(e.target.value=="Orders"){
          this.setState({SelectedUrl : <ItemListing url={"api/orders"} />});}          
      else{
        this.setState({SelectedUrl : ""});}     
    }
    render(){
    return(  
    <div style={{"padding":"15px"}}>  
    <form>
    <label for="Options">Wybierz:</label>
        <select name="Options" onChange={this.changeHandler} id="Options">
        <option value="Users">Users</option>
        <option value="Products">Products</option>
        <option value="Orders">Orders</option>
        <option value="Blog">Blog Posts</option>
        </select>
      </form>
        {this.state.SelectedUrl}    
    </div>
    );
    }
    

}