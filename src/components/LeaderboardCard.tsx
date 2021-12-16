import "../css/LeaderboardCard.css";
import Dog from "./DogInterface";
import { capitalise } from "../utils/capitalise";

export interface LeaderboardCards {
  position: number;
  dog: Dog;
}

function LeaderboardCard(props: LeaderboardCards): JSX.Element {
  const nameToPrint = (dogType: Dog) => {
    if (dogType.subbreed_name !== null) {
      return `${capitalise(dogType.subbreed_name)} ${capitalise(dogType.name)}`;
    } else {
      return `${capitalise(dogType.name)}`;
    }
  };
  return (
    <tr className="leaderboard-card">
      <td>{props.position}</td>
      <td>{props.dog !== undefined && nameToPrint(props.dog)}</td>
      <td>{props.dog.score}</td>
    </tr>
  );
}

export default LeaderboardCard;
