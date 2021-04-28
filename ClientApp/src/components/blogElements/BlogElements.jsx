import React from 'react';
import Faker from 'faker';

const BlogElements = () => {
    return (

        <div className="card">
        <h2>{Faker.random.words(2)}</h2>
        <h5>Blog element to show, May 1, 2021</h5>
        <div className="fakeimg" style={{"height":"200px"}}>Image</div>
        <p>{Faker.random.words(2)}</p>
        <p>{Faker.random.words(30)}</p>
        </div>
    
    );

}
export default BlogElements;