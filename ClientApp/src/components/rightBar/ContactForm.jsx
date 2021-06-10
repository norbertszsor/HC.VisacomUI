import React from 'react';
import './contactForm.css';

const ContactForm = () =>{
   
    return(
        <div className="contactConteiner">
        <form>
      
          <label for="fname">Nick</label>
          <input type="text" className="Contact_Input" id="fname" name="firstname" placeholder="Your nick name.."></input>
      
          <label for="lname">E-mail</label>
          <input type="text" className="Contact_Input" id="lname" name="lastname" placeholder="Your e-mail.."></input>
      
          <label for="country">Category</label>
          <select id="country" className="Contact_Input" name="country">
            <option value="Product info">Product</option>
            <option value="Question">Question</option>
            <option value="Reclamation">Reclamation</option>
            <option value="General">General</option>

          </select>
      
          <label for="subject">Description</label>
          <textarea id="subject" className="Contact_Input" name="subject" placeholder="Write something.." style={{"height":"200px"}}></textarea>
      
         <input type="button" onClick={(e) => {
                window.location = "mailto:no-reply@example.com";
                e.preventDefault();
            }} className="Contact_InputS" value="Submit"></input>
      
        </form>
      </div> 
    );
}

export default ContactForm;