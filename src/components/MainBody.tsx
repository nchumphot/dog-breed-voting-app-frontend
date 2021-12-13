import VotingCard from "./VotingCard";
import LeaderboardCard from "./LeaderboardCard";
import "../css/MainBody.css"

function MainBody(): JSX.Element {
    return (
        <>
            <div className="voting-card">
                <VotingCard />
                <VotingCard />
            </div>
            <h2>Leaderboard</h2>
            <LeaderboardCard />
        </>
    );
}

export default MainBody;
