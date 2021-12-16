import Dog from "./DogInterface";
import { useEffect, useState } from "react";
import TopThreeCard from "./TopThreeCard";
import "../css/TopThree.css";

interface ITopThree {
  rank: number;
  breed: string;
  subbreed: string | null;
  url: string;
  image?: string;
}

interface TopThreeProps {
  dogs: Dog[];
  first: string;
  second: string;
  third: string;
}

export default function TopThree(props: TopThreeProps): JSX.Element {
  const [topThreeDogs, setTopThreeDogs] = useState<ITopThree[]>([]);

  useEffect(() => {
    setTopThreeDogs(
      props.dogs.slice(0, 3).map((dog: Dog, index) => {
        if (dog.subbreed_name === null) {
          return {
            rank: index + 1,
            breed: dog.name,
            subbreed: null,
            url: `https://dog.ceo/api/breed/${dog.name}/images/random`,
            // image: null,
          };
        } else {
          return {
            rank: index + 1,
            breed: dog.name,
            subbreed: dog.subbreed_name,
            url: `https://dog.ceo/api/breed/${dog.name}/${dog.subbreed_name}/images/random`,
            // image: null,
          };
        }
      })
    );
  }, [props.dogs]);

  return (
    <div className="TopThreeDogs">
      {topThreeDogs.length === 3 && (
        <>
          <TopThreeCard dog={topThreeDogs[0]} image={props.first} />
          <TopThreeCard dog={topThreeDogs[1]} image={props.second} />
          <TopThreeCard dog={topThreeDogs[2]} image={props.third} />
        </>
      )}
    </div>
  );
}
