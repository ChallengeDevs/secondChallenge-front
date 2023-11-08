import axios from "axios";

export const handlerScoreRequest = async () => {
  try {
    const baseURL = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard`;
    let dataResponse = await axios.get(baseURL);

    if (dataResponse.status === 200) {
      const resAPI = dataResponse.data;
      return resAPI;
    }
  } catch (error) {
    console.error(`Error in request: ${error}`);
  }
};


export const handlerTeamRequest = async () => {
  try {
    const baseURL = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams`;
    let dataResponse = await axios.get(baseURL);

    if (dataResponse.status === 200) {
      const resAPI = dataResponse.data;
      return resAPI;
    }
  } catch (error) {
    
  }
}