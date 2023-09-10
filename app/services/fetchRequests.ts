import axios from "axios";
import { APP_URL } from "../config/urls";

const requestApi = axios.create({
  baseURL: APP_URL.mainURL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" }
});

export default requestApi;