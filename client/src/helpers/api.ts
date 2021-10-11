import axios from "axios";
import { Account } from "../constants/interfaces";
import * as config from "../variables/config.json";

export const signup = async (account: Account) => {
  const { username, displayname, password } = account;
  if (username && displayname && password) {
    let request;
    try {
      request = await axios.post(`${config.API_URL}/signup`, account);
    } catch (error) {
      throw error;
    }
    return request.data;
  } else {
    throw Error("Please fill  all of the fields");
  }
};

export const login = async (account: Account) => {
  const { username, password } = account;
  if (username && password) {
    let request;
    try {
      request = await axios.post(`${config.API_URL}/login`, account);
    } catch (error) {
      throw error;
    }
    return request.data;
  } else {
    throw Error("Please fill  all of the fields");
  }
};
