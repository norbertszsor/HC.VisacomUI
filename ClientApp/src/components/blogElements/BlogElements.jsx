import React from 'react';
import Faker from 'faker';

const BlogElements = props => {
    return (

        <div className="card">
        <h2>{props.data.title}</h2>
        <h5>{props.data.author}</h5>
        <div className="fakeimg" style={{"height":"200px",backgroundImage:`url(${props.data.mainPictureAdress})`}}>

        </div>
        <p>{props.data.description}</p>
        </div>
    
    );

}
export default BlogElements;