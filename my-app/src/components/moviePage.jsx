function MoviePage (props){
    return(
      <>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <section className="images">
             <img src={props.image1}/>
             <img src={props.image2}/>
            </section>
      </>
    );
};

export default MoviePage;