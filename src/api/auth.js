import config from "../configuration/config";
const axios = require("axios");

export const login = async ({ email = "", password = "" }) => {
  const query = {
    email: email,
    password: password,
  };

  try {
    const { data } = await axios.post(
      config.BASE_URL + config.LOGIN_URL,
      query
    );
    return { ...data };
  } catch (err) {
    return err.response;
  }
};

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
  const URL = otpResponse ? config.VERIFY_URL : config.SIGNUP_URL;
  try {
    const { data } = await axios.post(config.BASE_URL + URL, query);
    return { ...data };
  } catch (err) {
    return err.response;
  }
};
