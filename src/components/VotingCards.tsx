import VotingCard from "./VotingCard";
import { useEffect, useState } from "react";
import { cleanAPIData } from "../utils/cleanAPIData";

interface IDogInfo {
  breed: string;
  subbreed: string | null;
  URL: string;
}

export default function VotingCards(): JSX.Element {
  //   const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [dogInfo, setDogInfo] = useState<IDogInfo[]>();
  // const [dogVoted, setDogVoted] = useState<IDogInfo>();

  useEffect(() => {
    const getTwoDogs = () => {
      fetch("https://dog.ceo/api/breeds/image/random/2")
        .then((res) => res.json())
        .then((data) => setDogInfo(data.message.map(cleanAPIData)));
    };
    getTwoDogs();
  }, []);

  console.log(dogInfo);

  return (
    <>
      {dogInfo !== undefined &&
        dogInfo.map((dog, idx) => (
          <div key={idx}>
            <VotingCard dog={dog} />
          </div>
        ))}
    </>
  );
}
