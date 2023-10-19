import axios from "axios";

const options = {
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
};

const AxiosLogin = async (email, password, confirmPassword) => {
  const data = {
    email,
    password,
    confirmPassword,
  };

  return await axios.post(`http://localhost:3000/api/v1/user/login`, data, options);
};

const AxiosSignup = async (name, email, password, confirmPassword) => {
  const data = {
    name,
    email,
    password,
    confirmPassword,
  };

  return await axios.post(`http://localhost:3000/api/v1/user/register`, data, options);
};

export { AxiosLogin, AxiosSignup };
