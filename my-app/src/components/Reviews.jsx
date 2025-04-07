function Reviews (props) {
    return(
        <>
        <p>
            <b>{props.person}</b>
            <br/><br/>
            {props.review}
        </p>
        </>
    )
};

export default Reviews;