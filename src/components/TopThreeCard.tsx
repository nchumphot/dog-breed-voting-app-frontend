import "../css/TopThreeCard.css";
import { capitalise } from "../utils/capitalise";

interface TopThree {
  rank: number;
  breed: string;
  subbreed: string | null;
  url: string;
  image?: string;
}

export default function TopThreeCard(props: {
  dog: TopThree;
  image: string;
}): JSX.Element {
  console.log(props.image);
  return (
    <div className="top-three-card" id={`rank${props.dog.rank.toString()}`}>
      {/* <div className={`rank${props.dog.rank.toString()}`}> */}
      <h1>{props.dog.rank.toString()}</h1>
      <img src={props.image} alt={`rank ${props.dog.rank}`} />
      {props.dog.subbreed !== null ? (
        <h2>
          {capitalise(props.dog.subbreed) + " " + capitalise(props.dog.breed)}
        </h2>
      ) : (
        <h2>{capitalise(props.dog.breed)}</h2>
      )}
      {/* </div> */}
    </div>
  );
}
