import "../css/MainBody.css";
import VotingCards from "./VotingCards";
import LeaderboardCard from "./LeaderboardCard";
import TopThree from "./TopThree";
import { useEffect, useState } from "react";
import Dog from "./DogInterface";

function MainBody(): JSX.Element {
  const [triggerLeaderboard, setTriggerLeaderboard] = useState<boolean>(true);
  const [topTenList, setTopTenList] = useState<Dog[]>([
    { name: "", subbreed_name: "", score: 0 },
  ]);

  useEffect(() => {
    const fetchTopDogs = async () => {
      const response = await fetch(
        "https://dog-breed-voting-app.herokuapp.com/score"
      );
      const listTopDogs = await response.json();
      setTopTenList(listTopDogs.scores);
    };
    fetchTopDogs();
  }, [triggerLeaderboard]);

  const leaderboardList = topTenList.map((dog: Dog, index) => (
    <LeaderboardCard key={index} position={index + 1} dog={dog} />
  ));

  return (
    <>
      <div className="voting-card">
        <VotingCards />
      </div>
      <h2>Leaderboard</h2>
      <button onClick={() => setTriggerLeaderboard(!triggerLeaderboard)}>
        Refresh
      </button>
      <TopThree
        dogs={topTenList}
        triggerLeaderboard={triggerLeaderboard}
        setTriggerLeaderboard={setTriggerLeaderboard}
      />
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
