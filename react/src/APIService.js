import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";
const API = `${BASE_URL}api/`;
const API_ARTICLES = `${API}articles/`;
const API_USERS = `${API}users/`;
const AUTH = `${BASE_URL}auth/`;

export default class APIService {
  static getArticles() {
    return axios({
      method: "get",
      url: API_ARTICLES,
      timeout: 5000,
    }).then((response) => response.data);
  }

  static deleteArticle(id, token) {
    return axios({
      method: "delete",
      url: `${API_ARTICLES}${id}/`,
      timeout: 5000,
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.data);
  }

  static updateArticle(id, title, description, token) {
    return axios({
      method: "put",
      url: `${API_ARTICLES}${id}/`,
      timeout: 5000,
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        title: title,
        description: description,
      },
    }).then((response) => response.data);
  }

  static postArticle(title, description, token) {
    return axios({
      method: "post",
      url: API_ARTICLES,
      timeout: 5000,
      headers: {
        Authorization: `Token ${token}`,
      },
      data: {
        title: title,
        description: description,
      },
    }).then((response) => response.data);
  }

  static loginUser(username, password) {
    return axios({
      method: "post",
      url: AUTH,
      timeout: 5000,
      data: {
        username: username,
        password: password,
      },
    }).then((response) => response.data);
  }

  static registerUser(username, password) {
    return axios({
      method: "post",
      url: API_USERS,
      timeout: 5000,
      data: {
        username: username,
        password: password,
      },
    }).then((response) => response.data);
  }
}
