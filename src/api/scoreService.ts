import { connection } from "@/utils/axios";

export const handlerScoreRequest = async () => {
  try {
    let dataResponse = await connection.get("/nba/scoreboard");

    if (dataResponse.status === 200) {
      const resAPI = dataResponse.data;
      return resAPI.data;
    }
  } catch (error) {
    console.error(`Error in request: ${error}`);
  }
};

export const handlerTeamRequest = async () => {
  try {
    let dataResponse = await connection.get("/nba/teams");

    if (dataResponse.status === 200) {
      const resAPI = dataResponse.data;
      return resAPI.data;
    }
  } catch (error) {}
};
