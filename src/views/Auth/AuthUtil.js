import { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

Auth.configure(awsconfig);

export const userStatus = async (username) => {
  const code = "000000";
  Auth.confirmSignUp(username, code, {
    // If set to False, the API will throw an AliasExistsException error if the phone number/email used already exists as an alias with a different user
    forceAliasCreation: false,
  })
    .then((data) => console.log(data))
    .catch((err) => {
      switch (err.code) {
        case "UserNotFoundException":
          console.log("ERROR UserNotFoundException",username)
          return "unregistered";
        case "NotAuthorizedException":
          console.log("ERROR NotAuthorizedException",username)
          return "registered";
        case "AliasExistsException":
          console.log("ERROR AliasExistsException",username)
          // Email alias already exists
          return false;
        case "CodeMismatchException":
          console.log("ERROR CodeMismatchException",username)
          return false;
        case "ExpiredCodeException":
          console.log("ERROR ExpiredCodeException",username)
          return false;
        default:
          console.log("ERROR C, ", err.code)
          return false;
      }
    });
};
