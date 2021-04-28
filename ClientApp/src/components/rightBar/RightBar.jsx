import Faker from 'faker';
import ContactForm from './ContactForm';

const RightBar = () =>{
    return(

        <div className="rightcolumn">
        <div className="card">
            <h3>Popular Plants</h3>
            <div className="fakeimg"><img src={Faker.image.cats()} alt="" className="PopularPlantsImg"/></div>
            <div className="fakeimg"><img src={Faker.image.people()} alt="" className="PopularPlantsImg"/></div>
            <div className="fakeimg"><img src={Faker.image.abstract()} alt="" className="PopularPlantsImg"/></div>
        </div>
        <div className="card">
            <h3>Contact Us</h3>
            <ContactForm/>
        </div>
        
        <div className="card">
            <h3>Our Gallery</h3>
            <p>{Faker.random.words(5)}</p>
        </div>
        </div>


    );}

export default RightBar;