export const getBreeds = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = (await response.json()).message;
  return { data, statusCode: response.status };
}

getBreeds().then(console.log);