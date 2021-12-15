import "../css/LeaderboardCard.css";
import Dog from "./DogInterface";

export interface LeaderboardCards {
  position: number,
  dog: Dog,
}

function LeaderboardCard(props: LeaderboardCards): JSX.Element {
  return (
    <tr>
      <td>{props.position}</td>
      <td>{props.dog.name}</td>
      <td>{props.dog.subbreed_name}</td>
      <td>{props.dog.score}</td>
    </tr>
  );
}

export default LeaderboardCard;
