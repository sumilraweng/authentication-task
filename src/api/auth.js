const axios = require("axios");

const BASE_URL = " https://us-central1-ecomm-fed59.cloudfunctions.net/app";
const LOGIN_URL = "/user/login";

// const SIGNUP_URL = "/user/verifyRegister";
// console.log(BASE_URL + LOGIN_URL);

export const login = async ({ email = "", password = "" }) => {
  const query = {
    email: email,
    password: password,
  };

  try {
    const { data } = await axios.post(BASE_URL + LOGIN_URL, query);
    return { ...data };
  } catch (err) {
    return err.response;
  }
};

const SIGNUP_URL = "/user/register";
const VERIFY_URL = "/user/verifyRegister";

export const signup = async ({
  email = "",
  password = "",
  phone = "",
  name = "",
  otpResponse = undefined,
}) => {
  let query = {
    email: email,
    password: password,
    phone: phone,
    name: name,
  };
  query = otpResponse ? { ...query, otpResponse: otpResponse } : query;
  const URL = otpResponse ? VERIFY_URL : SIGNUP_URL;
  try {
    const { data } = await axios.post(BASE_URL + URL, query);
    return { ...data };
  } catch (err) {
    return err.response;
  }
};
