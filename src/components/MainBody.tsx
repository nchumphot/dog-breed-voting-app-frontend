//css
import "../css/MainBody.css";
//componenets
import VotingCard from "./VotingCard";
import LeaderboardCard from "./LeaderboardCard";
// Hooks
import { useEffect, useState } from "react";
//interface
import Dog from "./DogInterface";

function MainBody(): JSX.Element {
  //use states
  const [topTenList, setTopTenList] = useState<Dog[]>([
    { name: "", subbreed_name: "", score: 0 },
  ]);

  // Fetch top 10 voted dog breeds and create leaderboard list
  useEffect(() => {
    const fetchTopDogs = async () => {
      const response = await fetch(
        "https://dog-breed-voting-app.herokuapp.com/score"
      );
      const listTopDogs = await response.json();
      setTopTenList(listTopDogs.scores);
    };
    fetchTopDogs();
  }, []);

  const leaderboardList = topTenList.map((dog: Dog, index) => (
    <LeaderboardCard key={index} position={index + 1} dog={dog} />
  ));

  // Main Body Component
  return (
    <>
      <div className="voting-cards">
        <VotingCard />
        <VotingCard />
      </div>
      <h2>Leaderboard</h2>
      <button>Refresh</button>
      <table>
        <tr>
          <th>Position</th>
          <th>Breed</th>
          <th>Sub-breed</th>
          <th>Scores</th>
        </tr>
        {leaderboardList}
      </table>
    </>
  );
}

export default MainBody;
