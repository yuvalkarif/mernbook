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

export const getUser = async (id: string) => {
  let request;
  try {
    request = await axios.get(`${config.API_URL}/user/${id}`);
  } catch (error) {
    throw error;
  }
  return request.data;
};

export const getPost = async (id: string) => {
  let request;
  try {
    request = await axios.get(`${config.API_URL}/post/${id}`);
  } catch (error) {
    throw error;
  }
  return request.data;
};

export const likePost = async (id: string, postId: string) => {
  let request;
  try {
    request = await axios.patch(`${config.API_URL}/like`, { id, postId });
  } catch (error) {
    throw error;
  }
  return request.data;
};

export const checkUser = async () => {
  let request;
  try {
    request = await axios.get(`${config.API_URL}/auth`);
    return request.data;
  } catch (error) {
    throw error;
  }
};
export const postComment = async (id: string, postId: string, body: string) => {
  let request;
  try {
    request = await axios.post(`${config.API_URL}/comment`, {
      id,
      postId,
      body,
    });
  } catch (error) {
    throw error;
  }
  console.log(request.data);
  return request.data;
};

export const removeComment = async (commentId: string, postId: string) => {
  let request;
  try {
    request = await axios.post(`${config.API_URL}/remove-comment`, {
      commentId,
      postId,
    });
  } catch (error) {
    throw error;
  }
  console.log(request.data);
  return request.data;
};
