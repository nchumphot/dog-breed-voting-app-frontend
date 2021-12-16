import axios from "axios";
import Dog from "../components/DogInterface";

export const topThreeImgs = async (
  setDogImg0: React.Dispatch<React.SetStateAction<string>>,
  setDogImg1: React.Dispatch<React.SetStateAction<string>>,
  setDogImg2: React.Dispatch<React.SetStateAction<string>>,
  setTopTenList: React.Dispatch<React.SetStateAction<Dog[]>>
): Promise<void> => {
  axios.get("https://dog-breed-voting-app.herokuapp.com/score").then((res) => {
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
