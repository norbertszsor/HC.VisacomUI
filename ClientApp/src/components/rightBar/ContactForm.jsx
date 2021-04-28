import React from 'react';
import './contactForm.css';

const ContactForm = () =>{
    return(
        <div className="contactConteiner">
        <form action="action_page.php">
      
          <label for="fname">Nick</label>
          <input type="text" id="fname" name="firstname" placeholder="Your nick name.."></input>
      
          <label for="lname">E-mail</label>
          <input type="text" id="lname" name="lastname" placeholder="Your e-mail.."></input>
      
          <label for="country">Category</label>
          <select id="country" name="country">
            <option value="Product info">Product</option>
            <option value="Question">Question</option>
            <option value="Reclamation">Reclamation</option>
            <option value="General">General</option>

          </select>
      
          <label for="subject">Description</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{"height":"200px"}}></textarea>
      
          <input type="submit" value="Submit"></input>
      
        </form>
      </div> 
    );
}

export default ContactForm;