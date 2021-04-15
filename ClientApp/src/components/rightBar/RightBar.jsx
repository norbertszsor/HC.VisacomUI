import Faker from 'faker';

const RightBar = () =>{
    return(

        <div className="rightcolumn">
        <div className="card">
            <h2>Abaut us</h2>
            <div className="fakeimg" style={{"height":"100px"}}>Image</div>
            <p>{Faker.random.words(10)}</p>
        </div>
        <div className="card">
            <h3>Popular Plants</h3>
            <div className="fakeimg"><p>Image</p></div>
            <div className="fakeimg"><p>Image</p></div>
            <div className="fakeimg"><p>Image</p></div>
        </div>
        <div className="card">
            <h3>Our Gallery</h3>
            <p>{Faker.random.words(5)}</p>
        </div>
        </div>


    );}

export default RightBar;