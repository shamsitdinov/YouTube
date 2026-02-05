export const apiYoutube = async () => {
  const url = `https://youtube-v31.p.rapidapi.com/search?q=react&regionCode=US&maxResults=100&order=date`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "c63694e7c0msh1977d962ed2c5c6p17c8f3jsn51b88dd6a6e0",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
apiYoutube();
