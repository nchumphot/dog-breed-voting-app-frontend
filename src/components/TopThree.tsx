import Dog from "./DogInterface";
import { useEffect, useState } from "react";
import TopThreeCard from "./TopThreeCard";

interface ITopThree {
  rank: number;
  breed: string;
  subbreed: string | null;
  url: string;
}

export default function TopThree(props: {
  dogs: Dog[];
  triggerLeaderboard: boolean;
  setTriggerLeaderboard: (val: boolean) => void;
}): JSX.Element {
  const [dogImgs, setDogImgs] = useState<string[]>([]);

  const topThreeDogs = props.dogs.slice(0, 3).map((dog: Dog, index) => {
    if (dog.subbreed_name === null) {
      return {
        rank: index + 1,
        breed: dog.name,
        subbreed: null,
        url: `https://dog.ceo/api/breed/${dog.name}/images/random`,
        image: null,
      };
    } else {
      return {
        rank: index + 1,
        breed: dog.name,
        subbreed: dog.subbreed_name,
        url: `https://dog.ceo/api/breed/${dog.name}/${dog.subbreed_name}/images/random`,
        image: null,
      };
    }
  });

  useEffect(() => {
    setDogImgs([]);
    const getImages = async (topThreeDogs: ITopThree[]) => {
      topThreeDogs.forEach((dog) => {
        fetch(dog.url)
          .then((response) => response.json())
          .then((data) => {
            setDogImgs([...dogImgs, data.message]);
          });
      });
    };
    getImages(topThreeDogs);
    console.log(dogImgs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topThreeDogs]);

  return (
    <div>
      {topThreeDogs.length === 3 &&
        topThreeDogs.map((dog, index) => (
          <TopThreeCard key={index} dog={dog} image={dogImgs[index]} />
        ))}
    </div>
  );
}
