import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";

const server = express();
import App from "./client/App";

server.get("*", (req, res) => {
  const html = renderToString(<App />);
  console.log(html);

  res.send(html);
});

server.listen(3000, () => {
  console.log("App listening on port 3000");
});
