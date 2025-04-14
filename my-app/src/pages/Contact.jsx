import SM from '../components/socialMedia';
import './css/Contact.css';
import LOI from '../components/ListOfImages';
import React from "react";
import {useState} from "react";

function Contact (){

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "282c8eba-b631-472a-a4c4-68a838968ae4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return(
      <>
          <main>
            <h5>Contact Us</h5>
                <h4>Have any questions or concerns? Feel free to reach out!</h4>

<form onSubmit={onSubmit}>
                <div className="contact">
                    <div>
                <label for="name">Name: </label> 
                <input type="text" className="name" required/>
                    </div>

                <div>
                <label for="email">Email: </label> 
                <input type="text" className="email" required/>
                </div>

                <div>
                <label for="message">Type your message: </label> 
                <input type="text" className="message" required/>
                </div>

            </div>

            <div className="btn">
              <br/>
                <button type='submit'>Submit</button> 
            </div>     
   </form>     
   <br/>
   <span>{result}</span>
             <br/>
            </main>
            <footer>
                <div className="images">
                    <LOI
                image1="images/WI.jfif"
                image2="images/DP.jfif"
                image3="images/BT.jfif"/>
                </div>

                <br/>
                <h2>Contact Information:</h2>

                <div className="con-info">

<SM sm="+1 (xxx)-xxx xxxx" />
<SM sm="xxxxxxx@maybackmovies.com" /> 
                <SM sm="Instagram: maymoviesOfficial"/>
                <SM sm="Facebook: maymovies"/>
                <SM sm="X: maymoviesOfficial"/>
                

                </div>
             </footer>
      </>
    );
};

export default Contact;