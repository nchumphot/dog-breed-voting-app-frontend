import "../css/VotingCard.css";
// state of random dogs to display

interface IDogInfo {
  breed: string;
  subbreed: string | null;
  URL: string;
}

function VotingCard(props: { dog: IDogInfo }): JSX.Element {
  return (
    <button className="card-button">
      <img src={props.dog.URL} alt="votingcard" />
      <h3>{props.dog.breed[0].toUpperCase() + props.dog.breed.substr(1)}</h3>
      <p>
        {props.dog.subbreed !== null &&
          props.dog.subbreed[0].toUpperCase() + props.dog.subbreed.substr(1)}
      </p>
    </button>
  );
}

export default VotingCard;
