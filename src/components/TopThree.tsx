import Dog from "./DogInterface";
import { useEffect, useState } from "react";
// import TopThreeCard from "./TopThreeCard";

interface ITopThree {
  rank: number;
  breed: string;
  subbreed: string | null;
  url: string;
  image?: string;
}

export default function TopThree(props: { dogs: Dog[] }): JSX.Element {
  const [dogImgs, setDogImgs] = useState<string[]>([]);
  const [topThreeDogs, setTopThreeDogs] = useState<ITopThree[]>([]);

  useEffect(() => {
    const softCopy = topThreeDogs;
    topThreeDogs.forEach((dog, index) => {
      fetch(dog.url)
        .then((response) => response.json())
        .then((data) => {
          softCopy[index].image = data.message;
          setTopThreeDogs(softCopy);
        });
    });
    console.log(topThreeDogs);
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
    console.log(topThreeDogs);
    // const getImages = async (topThreeDogs: ITopThree[]) => {
    // const softCopy = topThreeDogs;
    // topThreeDogs.forEach((dog, index) => {
    //   fetch(dog.url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       softCopy[index].image = data.message;
    //       setTopThreeDogs(softCopy);
    //     });
    // });
    // };
    // getImages(topThreeDogs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dogs]);
  // useEffect(() => {
  //   const getImages = async (topThreeDogs: ITopThree[]) => {
  //     const softCopy = topThreeDogs;
  //     topThreeDogs.forEach((dog, index) => {
  //       fetch(dog.url)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           softCopy[index].image = data.message;
  //           setTopThreeDogs(softCopy);
  //         });
  //     });
  //   };
  //   getImages(topThreeDogs);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [props.dogs]);

  return (
    <div>
      {/* {topThreeDogs.length === 3 &&
        topThreeDogs.map((dog, index) => (
          <TopThreeCard key={index} dog={dog} image={dogImgs[index]} />
        ))} */}
    </div>
  );
}
