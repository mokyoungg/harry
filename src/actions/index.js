import mockData from "../apis/mockData";

export const fetchData = () => async (dispatch) => {
  const response = await mockData.get();

  dispatch({
    type: "FETCH_DATA",
    payload: response.data.data,
  });
};

export const chantSpell = (str) => {
  return {
    type: "CHANT_SPELL",
    payload: str,
  };
};
