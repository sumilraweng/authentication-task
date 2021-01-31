import { creatingEnums } from "../helper/creatingEnums";

const config = {
  dev: {
    BASE_URL: " https://us-central1-ecomm-fed59.cloudfunctions.net/app",
    LOGIN_URL: "/user/login",
    SIGNUP_URL: "/user/register",
    VERIFY_URL: "/user/verifyRegister",
  },
};
creatingEnums(config);

export default config.dev;
