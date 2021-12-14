interface IDogInfo {
  breed: string;
  subbreed: string | null;
  URL: string;
}

export function cleanAPIData(url: string): IDogInfo {
  const dogInfo: IDogInfo = { breed: "", subbreed: null, URL: "" };
  dogInfo.URL = url;
  const cleanPart1 = url.substr("https://images.dog.ceo/breeds/".length);
  const breedInfo = cleanPart1.substring(0, cleanPart1.indexOf("/")).split("-");
  dogInfo.breed = breedInfo[0];
  dogInfo.subbreed = breedInfo.length === 2 ? breedInfo[1] : null;
  return dogInfo;
}
