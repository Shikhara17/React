import "./Card.css"


function Card(props){
    const classes='card '+ props.className;
    return<div className={classes}>{props.children}</div>
}

export default Card;

//composition component which serves as a shell to any component
//Resolves code duplication as we extracted the css duplicated styling
