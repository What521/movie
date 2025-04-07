import "./css/pop.css";

function Pop (props){

    return(
      <section id="modal" className={props.className}>
        <span id="close" onClick={props.onClose}>&#10006;</span>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <section className="images">
             <img src={props.image1}/>
             <img src={props.image2}/>
            </section>
      </section>
    );
};

export default Pop;