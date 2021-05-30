import React from 'react';
import Faker from 'faker';
import "../blog/blog.css";
//{props.data.mainPictureAdress}
const BlogElements = props => {
    return (

        <div className="cardBlog">
            <h2 className="titleBlog">Title: {props.data.title}</h2>
            <h5>Autor: {props.data.author}</h5>
            <div className="fakeimgBlogContainer">
                <img className="fakeimgBlog" src={props.data.mainPictureAdress}></img>
                <div className="blogtxt">{props.data.description}
                
                </div>
            </div>
            <button className="blogButton">Read More</button>
            
           
            
        </div>
    
    );

}
export default BlogElements;