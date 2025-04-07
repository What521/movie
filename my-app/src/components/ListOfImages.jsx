import './css/ListOfImages.css'

function LOI (props) {
return(
    <section className="images">
    <img src={props.image1}/>
    <img src={props.image2}/>
    <img src={props.image3}/>
    </section>
)
}

export default LOI;