import VotingCards from "./VotingCards";
import LeaderboardCard from "./LeaderboardCard";
import "../css/MainBody.css";

function MainBody(): JSX.Element {
  return (
    <>
      <div className="voting-card">
        <VotingCards />
      </div>
      <h2>Leaderboard</h2>
      <LeaderboardCard />
    </>
  );
}

export default MainBody;
