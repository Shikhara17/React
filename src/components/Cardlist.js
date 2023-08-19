import "../index.css"

function Cardlist(props){
    const classes="concept "+props.className;
    return <li className={classes}>{props.children}</li>
}

export default Cardlist;