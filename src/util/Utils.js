const jwt = require("jwt-simple");
const PERSONA_SECRET = "PERSONA";
export const filterArray = (data) => {
  const { hourList, hour } = data;
  const index = hourList.indexOf(hour);
  if (index > -1) {
    hourList.splice(index, 1);
  }
  return hourList;
};

export const jwtEncode = (data) => {
  return jwt.encode(data, PERSONA_SECRET);
};
