import axios from "axios";

const AxiosLogin = async (email, password, confirmPassword) => {
  const response = await axios.post(
    "http://localhost:3000/api/v1/user/register",
    {
      email,
      password,
      confirmPassword,
    }
  );
  return response.data;
};

export { AxiosLogin };
