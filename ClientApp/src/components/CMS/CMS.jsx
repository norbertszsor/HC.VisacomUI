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
    SelectedUrl: <ItemListing url={"api/account/"} />,
    }
    changeHandler = e =>{
      if(e.target.value=="Products"){
        this.setState({SelectedUrl : <ItemListing url={"api/products/"} />});}
      else if(e.target.value=="Users"){
        this.setState({SelectedUrl : <ItemListing url={"api/account/"} />});}
        else if(e.target.value=="Orders"){
          this.setState({SelectedUrl : <ItemListing url={"api/orders/"} />});}
          else if(e.target.value=="Blog"){
            this.setState({SelectedUrl : <ItemListing url={"api/blog/"} />});}           
      else{
        this.setState({SelectedUrl : ""});}     
    }


    render(){
      
      var options = [
        <option value='Users'>Users</option>,
        <option value='Products'>Products</option>,
        <option value='Blog'>Blog</option>,
        <option value='Orders'>Orders</option>
      ]
      
      if(localStorage.getItem("Role")=="Blogger"){
        options = [
          <option value=''></option>,
          <option value='Blog'>Blog</option>]
      }
      if(localStorage.getItem("Role")=="Warehouseman"){
        options = [
          <option value=''></option>,
          <option value='Products'>Products</option>,
          <option value='Orders'>Orders</option>]
      }

    return(  
    <div style={{"padding":"15px"}}>  
    <form>
    <label for="Options">Wybierz:</label>
        <select name="Options" onChange={this.changeHandler} id="Options">
          {options}
        </select>
      </form>
        {this.state.SelectedUrl}
    </div>
    );
    }
    

}