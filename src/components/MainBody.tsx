import "../css/MainBody.css";
import VotingCards from "./VotingCards";
import LeaderboardCard from "./LeaderboardCard";
import TopThree from "./TopThree";
import { useEffect, useState } from "react";
import Dog from "./DogInterface";
import { topThreeImgs } from "../utils/topThreeImgs";

function MainBody(): JSX.Element {
  const [topTenList, setTopTenList] = useState<Dog[]>([
    { name: "", subbreed_name: "", score: 0 },
  ]);
  const [dogImg0, setDogImg0] = useState<string>("");
  const [dogImg1, setDogImg1] = useState<string>("");
  const [dogImg2, setDogImg2] = useState<string>("");

  useEffect(() => {
    topThreeImgs(setDogImg0, setDogImg1, setDogImg2, setTopTenList);
  }, []);

  const leaderboardList = topTenList.map((dog: Dog, index) => (
    <LeaderboardCard key={index} position={index + 1} dog={dog} />
  ));

  return (
    <section className="main-body">
      <div className="voting-card">
        <VotingCards />
      </div>
      {topTenList.length === 10 && (
        <div className="table-area">
          <h2>Leaderboard</h2>
          <button
            onClick={() =>
              topThreeImgs(setDogImg0, setDogImg1, setDogImg2, setTopTenList)
            }
          >
            Refresh Leaderboard
          </button>
          <TopThree
            dogs={topTenList}
            first={dogImg0}
            second={dogImg1}
            third={dogImg2}
          />
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Breed</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>{leaderboardList}</tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default MainBody;
