import "./Card.css"
import "../expenses/ExpenseItem.css"
function Card(props){
    const classes='card '+ props.className;
    console.log(classes)
    return<div className={classes}>{props.children}</div>
}

export default Card;

//composition component which serves as a shell to any component
//Resolves code duplication as we extracted the css duplicated styling
