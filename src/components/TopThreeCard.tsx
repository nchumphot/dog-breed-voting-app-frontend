interface TopThree {
  rank: number;
  breed: string;
  subbreed: string | null;
  url: string;
}

export default function TopThreeCard(props: {
  dog: TopThree;
  image: string;
}): JSX.Element {
  console.log(props.image);
  return (
    <div className="top-three-card">
      <h1>{props.dog.rank.toString()}</h1>
      <img src={props.image} alt={`rank ${props.dog.rank}`} />
      <h2>{props.dog.breed}</h2>
      {props.dog.subbreed !== null ? <h2>{props.dog.subbreed}</h2> : <br />}
    </div>
  );
}
