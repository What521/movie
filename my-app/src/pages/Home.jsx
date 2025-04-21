import './css/Home.css';
import Movie from '../components/movie.jsx';
import React, {useState, useEffect} from "react";
import Pop from '../components/pop.jsx';
import LOI from '../components/ListOfImages.jsx';

function App() {

  const [modalOpenRN, setModalOpenRN] = useState(false);
  const toggleModalRN = () => {
    setModalOpenRN(!modalOpenRN);
  }

  const [modalOpenPB, setModalOpenPB] = useState(false);
  const toggleModalPB = () => {
    setModalOpenPB(!modalOpenPB);
  }

  const [modalOpenKW, setModalOpenKW] = useState(false);
  const toggleModalKW = () => {
    setModalOpenKW(!modalOpenKW);
  }

  const [modalOpenDN, setModalOpenDN] = useState(false);
  const toggleModalDN = () => {
    setModalOpenDN(!modalOpenDN);
  }

  return (
    <>

<h5>Home</h5>

<h3>Top Recommended movies:</h3>

<ul className="recommended">


<Movie 
        onClick={toggleModalRN}
        name = "Red Notice"
        image1 = {`${process.env.PUBLIC_URL}images/RN.jfif`}
        cast = "Dwayne Johnson, Ryan Reynolds"
        year = "2021"
        rating = "6.3/10 IMDb"
        />


          <Movie
           onClick={toggleModalPB}
           name = "Puss in the boots"
           image1 ={`${process.env.PUBLIC_URL}/images/PB.jfif`}
           cast= "Antonio Banderas, Salma Hayek"
           year= "2011"
           rating= "6.6/10 IMDb"  
          />
</ul>

    <h3>Now streaming:</h3>
    <ul className="nowStreaming">
    <Movie
       onClick={toggleModalKW}
          name = "A Knight's War"
        image1 ={`${process.env.PUBLIC_URL}/images/KW2.jfif`}
        cast = "Jeremy Ninaber, Kristen Kasteri"
        year = "2025"
        rating = "7.1/10 IMDb"/>

          <Movie
           onClick={toggleModalDN}
           name = "Dark Nuns"
           image1={`${process.env.PUBLIC_URL}/images/DN.jfif`}
           cast= "Moon Woo-jin, Lee Jin-wook"
           year= "2025"
           rating= "5.8/10 IMDb"  
          />
    </ul>


    <div className="RP">
<LOI
    image1={`${process.env.PUBLIC_URL}/images/DW.png`} 
    image2={`${process.env.PUBLIC_URL}/images/IW.jfif`}
    image3={`${process.env.PUBLIC_URL}/images/CA.jfif`}
/>

<LOI
    image1={`${process.env.PUBLIC_URL}/images/DS.jfif`}
    image2={`${process.env.PUBLIC_URL}/images/BTM.jfif`}
    image3={`${process.env.PUBLIC_URL}/images/BA.jfif`}
/>
  
  </div>


  <Pop className={modalOpenRN ? "opening" : "closing"}
  onClose={toggleModalRN}
  name = "Red Notice"
   desc = "John Hartley is an FBI profiler who investigates the theft of one of the eggs on display at the Museo Nazionale di Castel Sant'Angelo in Rome, along with Interpol agent Urvashi Das. Having stolen the egg, globally wanted art thief Nolan Booth manages to escape but finds Hartley and the Interpol at his home in Bali. They arrest Booth, but not before Booth's main rival Sarah 'The Bishop' Black steals the egg and frames Hartley."
      image1 = {`${process.env.PUBLIC_URL}/images/RN.jfif`}
        image2 =  {`${process.env.PUBLIC_URL}/images/RN2.jfif`}
  />

<Pop className={modalOpenPB ? "opening" : "closing"}
  onClose={toggleModalPB}
  name = "Puss in the boots"
   desc = "Long before meeting Shrek, Puss in Boots (Chris Miller) -- just named a hero for saving a woman from a charging bull, is run out of town on suspicion of bank robbery, even though the real villain is Puss' friend, Humpty Dumpty (Joe Aguilar). Though there is still animosity between them, Puss and Humpty reunite to steal a goose that lays golden eggs. Joining them for the adventure of nine lifetimes is notorious cat burglar, Kitty Softpaws (Tom Wheeler)."
      image1 = {`${process.env.PUBLIC_URL}/images/PB.jfif`}
        image2 =  {`${process.env.PUBLIC_URL}/images/PB2.jfif`}
  />
 
 <Pop className={modalOpenKW ? "opening" : "closing"}
  onClose={toggleModalKW}
  name = "A Knight's War"
   desc = "a knight, Bhodie, embarks on a perilous journey into a fallen realm to retrieve the corrupted soul of the Chosen One, facing witches, demons, and brutal warriors, while discovering that her return could doom humanity."
      image1 = {`${process.env.PUBLIC_URL}/images/KW.jfif`}
        image2 =  {`${process.env.PUBLIC_URL}/images/KW2.jfif`}/>

<Pop className={modalOpenDN ? "opening" : "closing"}
  onClose={toggleModalDN}
  name = "Dark Nuns"
   desc = "a knight, Bhodie, embarks on a perilous journey into a fallen realm to retrieve the corrupted soul of the Chosen One, facing witches, demons, and brutal warriors, while discovering that her return could doom humanity."
      image1 = {`${process.env.PUBLIC_URL}/images/DN.jfif`}
        image2 =  {`${process.env.PUBLIC_URL}/images/DN2.jfif`}/>
    </>

  );
}

export default App;