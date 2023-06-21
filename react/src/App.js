import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login.js";
import Nav from "./components/nav.js";
import ArticleList from "./components/articles.js";
import APIService from "./APIService.js";
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [articles, setArticles] = useState([]);
  const [token] = useCookies(["token"]);

  useEffect(() => {
    APIService.getArticles()
      .then((data) => setArticles(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = (id, title, description) => {
    APIService.updateArticle(id, title, description, token["token"])
      .then((data) => {
        const newArticles = articles.map((article) => {
          if (article.id === data.id) return data;
          return article;
        });
        setArticles(newArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (article) => {
    APIService.deleteArticle(article.id, token["token"])
      .then((data) => {
        const newArticles = articles.filter((a) => {
          if (article.id === a.id) return false;
          return true;
        });
        setArticles(newArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePost = (title, description) => {
    APIService.postArticle(title, description, token["token"])
      .then((data) => {
        const newArticles = [...articles, data];
        setArticles(newArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <h1
                style={{
                  borderBottom: "3px solid black",
                  paddingBottom: "0.5em",
                  marginBottom: "1.5em",
                }}
              >
                Articles
              </h1>
              <ArticleList
                articles={articles}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handlePost={handlePost}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
