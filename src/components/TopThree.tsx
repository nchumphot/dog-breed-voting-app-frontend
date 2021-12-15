import Dog from "./DogInterface";
import { useEffect, useState } from "react";

export default function TopThree(props: {dogs: Dog[]}): JSX.Element {
  const [topThreeImg, setTopThreeImg] = useState<string[]>([])

  const top_breeds = props.dogs.slice(0,3).map((dog:Dog, index) => {
    if(dog.subbreed_name === null) {
      return `https://dog.ceo/api/breed/${dog.name}/images/random`
    } else {
      return `https://dog.ceo/api/breed/${dog.name}/${dog.subbreed_name}/images/random`
    }
  });

  useEffect(() => {
    const getImages = async (top_breeds: string[]) => {
      top_breeds.forEach((url) => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setTopThreeImg([...topThreeImg, data.message]))
      })
    };
    getImages(top_breeds);
  }, [])

  
  return (
    <div>
      <img src={topThreeImg[0]} alt="top-dog"></img>
      <img src={topThreeImg[1]} alt="underdog"></img>
      <img src={topThreeImg[2]} alt="noonecares"></img>
    </div>
  )
}