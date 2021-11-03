import axios from "./axiosInstance";

const ApiFetching = () => {
  // users
  const login = (payload, callbackSuccess) => {
    axios
      .post("/users/login", payload)
      .then((res) => {
        callbackSuccess(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  // products
  const getProducts = (token, callbackSuccess) => {
    const headers = {
      "Content-type": "application/json",
      Authorization: token,
    };
    axios
      .get("/products", { headers: headers })
      .then((res) => {
        callbackSuccess(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return {
    login,
    getProducts
  };
};

export default ApiFetching;
