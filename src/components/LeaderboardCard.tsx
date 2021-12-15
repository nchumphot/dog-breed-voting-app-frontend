import "../css/LeaderboardCard.css";
import Dog from "./DogInterface";

export interface LeaderboardCards {
  position: number;
  dog: Dog;
}

function LeaderboardCard(props: LeaderboardCards): JSX.Element {
  const capital = (name: string) => {
    return name[0].toUpperCase() + name.substr(1);
  };

  const nameToPrint = (dogType: Dog) => {
    if (dogType.subbreed_name !== null) {
      return `${capital(dogType.subbreed_name)} ${capital(dogType.name)}`;
    } else {
      return `${capital(dogType.name)}`;
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
