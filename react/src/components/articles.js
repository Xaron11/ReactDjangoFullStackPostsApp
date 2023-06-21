import React, { useState } from "react";
import "./articles.css";
import { BigForm } from "./form.js";
import { useCookies } from "react-cookie";

function ArticleContent(props) {
  return (
    <>
      <h2
        style={{
          marginTop: "1em",
          borderBottom: "2px solid #d0d0d0",
          paddingBottom: "0.5em",
          fontWeight: "normal",
        }}
      >
        {props.article.title}
      </h2>
      <p
        style={{
          textAlign: "justify",
          padding: "0 2em",
          color: "black",
          fontSize: "1.1em",
        }}
      >
        {props.article.description}
      </p>
    </>
  );
}

function ArticleActionBox(props) {
  return (
    <div className="actionbox">
      <button
        onClick={() => props.handleEdit(props.article)}
        style={{ background: "#b3fffb" }}
      >
        Edit
      </button>
      <button
        onClick={() => props.handleDelete(props.article)}
        className="warning"
        style={{ background: "#ff6c6c" }}
      >
        Delete
      </button>
    </div>
  );
}

function ArticleEdit(props) {
  return props.editArticle && props.article.id === props.editArticle.id ? (
    <div style={{ margin: "0 2em" }}>
      <BigForm
        input1Name="Title"
        input2Name="Description"
        input1Value={props.article.title}
        input2Value={props.article.description}
        input1Type="text"
        buttonName="Update"
        buttonHandler={(input1, input2) =>
          props.handleUpdate(props.article.id, input1, input2)
        }
      />
    </div>
  ) : (
    <ArticleActionBox
      article={props.article}
      handleEdit={props.handleEdit}
      handleDelete={props.handleDelete}
    />
  );
}

function ArticlePost(props) {
  return (
    <div
      style={{
        margin: "02em",
        padding: "2em 0",
        borderTop: "3px solid #d0d0d0",
      }}
    >
      <h1
        style={{
          marginTop: 0,
          borderBottom: "3px solid black",
          paddingBottom: "0.5em",
        }}
      >
        New Article
      </h1>
      <BigForm
        input1Name="Title"
        input2Name="Description"
        input1Value=""
        input2Value=""
        input1Type="text"
        buttonName="Post"
        buttonHandler={(input1, input2) => {
          props.handlePost(input1, input2);
        }}
      />
    </div>
  );
}

function ArticleList(props) {
  const [editArticle, setEditArticle] = useState(null);
  const [token] = useCookies(["token"]);

  const handleEdit = (article) => {
    setEditArticle(article);
  };

  const handleUpdate = (id, title, description) => {
    props.handleUpdate(id, title, description);
    setEditArticle(null);
  };

  const handleDelete = (article) => {
    props.handleDelete(article);
  };

  const handlePost = (title, description) => {
    props.handlePost(title, description);
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      {props.articles &&
        props.articles.map((article) => (
          <div key={article.id}>
            <ArticleContent article={article} />
            {token["token"] && (
              <ArticleEdit
                article={article}
                editArticle={editArticle}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            )}
          </div>
        ))}
      {token["token"] && <ArticlePost handlePost={handlePost} />}
    </div>
  );
}

export default ArticleList;
