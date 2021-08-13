export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
      return true;
    }
    return false;
  };

  
export const onSignUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
        },
      });
      console.log("EL USUARIO ", user);
      localStorage.setItem("user", email);
      history.push("/verify")
    } catch (error) {
      // errorHandler(error.code);
      console.log("error signing up:", error, error.code);
    }
  };