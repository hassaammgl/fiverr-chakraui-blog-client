import axios from "axios";

const domain = "http://localhost:3000";

const AxiosLogin = async (email, password, confirmPassword) => {
  await axios
    .post(
      `${domain}/api/v1/user/login`,
      {
        email,
        password,
        confirmPassword,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

const AxiosSignup = async () => {};

export { AxiosLogin,AxiosSignup };
