import axios from "axios";

let config = {
  baseURL: "http://localhost:8080",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

if (window.location.hostname === "localhost") {
  config.baseURL = "http://localhost:8080";
}

const instance = axios.create(config);
export default instance;
