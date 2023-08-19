import Cardlist from "./Cardlist";
function Concept(props) {
  return (
    <Cardlist>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Cardlist>
  );
}

export default Concept;
