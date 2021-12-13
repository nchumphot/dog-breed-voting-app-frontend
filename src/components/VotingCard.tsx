import "../css/VotingCard.css";
// state of random dogs to display
function VotingCard(): JSX.Element {
    return (
        <button className="card-button">
            <img
                src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
                alt="votingcard"
            />
            <h3>Dog Breed</h3>
            <p>Dog Sub-breed</p>
        </button>
    );
}

export default VotingCard;