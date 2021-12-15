import VotingCard from "./VotingCard";
import { useEffect, useState } from "react";
import { cleanAPIData } from "../utils/cleanAPIData";
import { API_BASE } from "../utils/APIFragments";
import { trackPromise } from "react-promise-tracker";
import axios from "axios";
import { LoadingIndicator } from "./LoadingIndicator";
import "../css/VotingCards.css";

interface IDogInfo {
  breed: string;
  subbreed: string | null;
  URL: string;
}

export default function VotingCards(): JSX.Element {
  const [dogInfo, setDogInfo] = useState<IDogInfo[]>();
  const [dogVoted, setDogVoted] = useState<IDogInfo>();

  useEffect(() => {
    const getTwoDogs = () => {
      trackPromise(
        fetch("https://dog.ceo/api/breeds/image/random/2")
          .then((res) => res.json())
          .then((data) => setDogInfo(data.message.map(cleanAPIData)))
      );
    };
    getTwoDogs();
  }, [dogVoted]);

  console.log(dogInfo);

  const handleVote = (dog: IDogInfo): void => {
    axios
      .put(`${API_BASE}/score`, {
        breed: dog.breed,
        subbreed: dog.subbreed,
      })
      .then((response) => {
        console.log(response);
        setDogVoted(dog);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="voting-cards">
      <LoadingIndicator />
      {dogInfo !== undefined &&
        dogInfo.map((dog, idx) => (
          <div key={idx}>
            <VotingCard dog={dog} handleVote={handleVote} />
          </div>
        ))}
    </div>
  );
}
