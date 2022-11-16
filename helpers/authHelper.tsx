export const setLoginAuthToken = (data: string) => {
    try {
        localStorage.setItem("authToken", JSON.stringify(data));
      } catch (error) {
        console.log(error);
    }
}

export const getAuthToken = async() => {
    try {
        const token = await localStorage.getItem("authToken");
        return token;
      } catch (error) {
        console.log(error);
    }
}

export const removeAuthToken = async(data: string) => {
  try {
    return await localStorage.Remove("authToken", JSON.stringify(data));
  } 
  catch (error) {
    console.log(error);
  }
}

export const isUserLoggedIn = async(data: string) => {
  try {
    return await getAuthToken() !== null ? true : false;
    } catch (error) {
      console.log(error);
  }
}