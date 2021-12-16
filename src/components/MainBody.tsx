import "../css/MainBody.css";
import VotingCards from "./VotingCards";
import LeaderboardCard from "./LeaderboardCard";
import TopThree from "./TopThree";
import { useEffect, useState } from "react";
import Dog from "./DogInterface";
import axios from "axios";

function MainBody(): JSX.Element {
  const [topTenList, setTopTenList] = useState<Dog[]>([
    { name: "", subbreed_name: "", score: 0 },
  ]);
  const [dogImg0, setDogImg0] = useState<string>("");
  const [dogImg1, setDogImg1] = useState<string>("");
  const [dogImg2, setDogImg2] = useState<string>("");

  useEffect(() => {
    const topThreeImgs = async () => {
      axios
        .get("https://dog-breed-voting-app.herokuapp.com/score")
        .then((res) => {
          console.log(res);
          const imgUrl0 =
            res.data.scores[0].subbreed_name !== null
              ? `https://dog.ceo/api/breed/${res.data.scores[0].name}/${res.data.scores[0].subbreed_name}/images/random`
              : `https://dog.ceo/api/breed/${res.data.scores[0].name}/images/random`;

          axios.get(imgUrl0).then((res) => setDogImg0(res.data.message));

          const imgUrl1 =
            res.data.scores[1].subbreed_name !== null
              ? `https://dog.ceo/api/breed/${res.data.scores[1].name}/${res.data.scores[1].subbreed_name}/images/random`
              : `https://dog.ceo/api/breed/${res.data.scores[1].name}/images/random`;

          axios.get(imgUrl1).then((res) => setDogImg1(res.data.message));

          const imgUrl2 =
            res.data.scores[2].subbreed_name !== null
              ? `https://dog.ceo/api/breed/${res.data.scores[2].name}/${res.data.scores[2].subbreed_name}/images/random`
              : `https://dog.ceo/api/breed/${res.data.scores[2].name}/images/random`;

          axios.get(imgUrl2).then((res) => setDogImg2(res.data.message));

          setTopTenList(res.data.scores);
        });
    };
    topThreeImgs();
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
          {/* <button onClick={() => setTriggerLeaderboard(!triggerLeaderboard)}>
            Refresh Leaderboard
          </button> */}
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
