import React from 'react';
import Faker from 'faker';
import "../blog/blog.css";
const ReadMore=()=>{
    var itemlist=[{height:"auto"},{display: "none"},{display: "none",height:"0px"},{height:"auto",top:"0"}];
return itemlist;
}
const ReadLess=()=>{
    var itemlist=[{height:"350px"},{display: "block"},{display: "block",height:"150px"},{height:"200px",top:"-100px"}];
return itemlist;
}
const BlogElements = props => {
    const [styl,setStyl]=React.useState([{},{},{},{}]);
    return (
        
        <div className="cardBlog" style={styl[0]}>
            <div className="blogimgFade" style={styl[1]}><div className="blogDate">{props.data.date}</div></div>
            <div className="fakeimgBlogContainer" style={{ backgroundImage :`url(${props.data.mainPictureAdress})`}}>
            </div>
            <div className="blogButton" style={styl[1]} onClick={()=>setStyl(ReadMore())}>Read More</div>

    
            <div className="blogtxt" style={styl[3]}>
            <h2 className="titleBlog" >{props.data.title}</h2>
            <h5>Autor: {props.data.author}</h5>
                {props.data.description.split('\\n').map(str => <p>{str}</p>)}
            </div>
            <div className="blogButton2" onClick={()=>setStyl(ReadLess())}>Show Less</div>
            

            <div className="blogFade" style={styl[2]}>
            </div>
        </div>
    
    );

}
export default BlogElements;