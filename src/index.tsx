import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./client/App";

const server = express();

server.get("*", (req, res) => {
  const html = renderToString(<App />);
  console.log(html);

  res.send(html);
});

server.listen(3000, () => {
  console.log("App listening on port 3000");
});
