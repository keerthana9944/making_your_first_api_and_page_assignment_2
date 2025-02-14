const express = require("express");
const app = express();
const port = 3000;

const statusCodes = {
  200: "OK: The request has succeeded.",
  201: "Created: The request was successful, and a resource was created.",
  204: "No Content: The server processed the request but has no content to return.",
  400: "Bad Request: The server cannot process the request due to a client error.",
  401: "Unauthorized: Authentication is required and has failed or not been provided.",
  403: "Forbidden: The server refuses to authorize the request.",
  404: "Not Found: The requested resource could not be found.",
  405: "Method Not Allowed: The method is not supported for the requested resource.",
  429: "Too Many Requests: The user has sent too many requests in a given time.",
  500: "Internal Server Error: A generic error message for unexpected server issues.",
  502: "Bad Gateway: The server received an invalid response from an upstream server.",
  503: "Service Unavailable: The server is temporarily unable to handle the request.",
  504: "Gateway Timeout: The server did not receive a timely response from an upstream server."
};

app.get("/status-info", (req, res) => {
  const code = parseInt(req.query.code);
  
  if (!code || !statusCodes[code]) {
    return res.status(400).json({ status: 400, message: "Invalid or unsupported status code." });
  }

  res.json({ status: code, message: statusCodes[code] });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});