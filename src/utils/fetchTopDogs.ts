import Dog from "../components/DogInterface";

export const fetchTopDogs = async (
  setState: React.Dispatch<React.SetStateAction<Dog[]>>
): Promise<void> => {
  const response = await fetch(
    "https://dog-breed-voting-app.herokuapp.com/score"
  );
  const listTopDogs = await response.json();
  setState(listTopDogs.scores);
  console.log("Top 10 dogs have been fetched.");
};
