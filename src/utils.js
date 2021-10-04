import Auth from "@aws-amplify/auth";
import awsconfig from "./aws-exports"
const TOKEN_KEY = "jwt";
const GUEST_KEY = "guest";

export const isLogin = async () => {
  Auth.configure(awsconfig)
  const session = await Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  });

  updateUser()

  
  console.log("EXISTE LA SESSION=? ", session);
  
  return session? true:false 
  // Auth.currentAuthenticatedUser({
  //   bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  // })
  //   .then((user) => {
  //     console.log("isloginu",user);
  //     return true;
  //   })
  //   .catch((err) => {
  //     console.log("islogine " ,err);
  //     return false;
  //   });
};

// export const isLogin = () => {
//   console.log("ENTRO AL LOGIN")
//   if (localStorage.getItem(TOKEN_KEY)) {
//     return true;
//   }
//   return false;
// };

export const isGuest = () => {
  console.log("entroa uisguesasdt");
  if (localStorage.getItem(GUEST_KEY)) {
    console.log("sienciontro");
    return true;
  }
  console.log("noencontro");

  return false;
};
