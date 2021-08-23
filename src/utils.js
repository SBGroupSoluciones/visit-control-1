const TOKEN_KEY = "jwt";
const GUEST_KEY = "guest";

export const isLogin = () => {
  console.log("entroa islogn")
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};

export const isGuest = () => {
  console.log("entroa uisguesasdt")
  if (localStorage.getItem(GUEST_KEY)) {
    console.log("sienciontro")
    return true;
  }    
  console.log("noencontro")

  return false;
};
