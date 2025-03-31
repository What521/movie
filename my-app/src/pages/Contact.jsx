import './css/Contact.css';

function Contact (){
    return(
      <>
          <main>
            <h2>Contact Us</h2>
                <h4>Have any questions or concerns? Feel free to reach out!</h4>

                <div className="contact">

                    <div>
                <label for="name">Name: </label> 
                <input type="text" className="name"/>
                    </div>

                <div>
                <label for="email">Email: </label> 
                <input type="text" className="email"/>
                </div>

                <div>
                <label for="message">Type your message: </label> 
                <input type="text" className="message"/>
                </div>

            </div>

            <div className="btn">
              <br/>
                <button>Submit</button>
               
            </div>     
             <br/>
            </main>
            <footer>
                <div className="images">
                <img src="images/WI.jfif"/>
                <img src="images/DP.jfif"/>
                <img src="images/BT.jfif"/>
                </div>

                <br/>
                <h2>Contact Information:</h2>

                <div className="con-info">

                <h5> +1 (xxx)-xxx xxxx </h5>
                <h5> xxxxxxx@maybackmovies.com </h5>
            
                    <h5>Instagram: maymoviesOfficial</h5>
                   <h5>Facebook: maymovies</h5>
                   <h5>X: maymoviesOfficial</h5>

                </div>
             </footer>
      </>
    );
};

export default Contact;