import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./client/App";

const server = express();

server.get("*", (req, res) => {
  const head = "<title>Hello React!</title>"; // TODO: Implement head.
  const body = renderToString(<App />);
  const html = `<!DOCTYPE html><html><head>${head}</head><body>${body}</body></html>`;

  console.log(`URL ${req.url}: Sent html ${html}`);
  res.set("Content-Type", "text/html").status(200).send(html);
});

server.listen(3000, () => {
  console.log("App listening on port 3000");
});
