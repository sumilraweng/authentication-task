import axios from "axios";
import config from "../configuration/config";

const instance = axios.create({
  baseURL: config.BASE_URL,
  timeout: 4000,
});

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

const hitAuthApi = ({
  url,
  params = {},
  headers = {},
  body = {},
  method = "GET",
}) => {
  switch (method) {
    case "POST":
      //
      return (async () => {
        try {
          const response = await instance.post(url, body, {
            params: { ...params },
            headers: { ...headers },
          });
          return response;
        } catch (err) {
          return err;
        }
      })();

    default:
      return (async () => {
        try {
          const response = await instance.get(url, {
            params: { ...params },
            headers: { ...headers },
          });
          return response;
        } catch (err) {
          return err;
        }
      })();

    // return new Promise((resolve, reject) => {
    //   instance
    //     .get(url, { params: { ...params }, headers: { ...headers } })
    //     .then((response) => {
    //       if (response.status === 200) {
    //         resolve(response);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("GET-Error=>", error);
    //     });
    // });
  }
};
export { hitAuthApi };

export default instance;
