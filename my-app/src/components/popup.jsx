import './css/popup.css'

function Popup (props){
    return(
       <section className="pp">
         <h3>{props.title}</h3>
         <p>{props.summary}</p>
       </section>
    );
};

export default Popup;