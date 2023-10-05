const express = require("express");
const axios = require("axios");
const router = express.Router();

// Handle API requests
router.all("/:request_url", async (req, res) => {
  try {
    const { request_url } = req.params;
    const { headers, body } = req;

    // Make a request to the requested URL
    const response = await axios({
      method: req.method,
      url: request_url,
      headers,
      data: body,
    });

    // Send the response data back to the client
    res.send(response.data);
  } catch (error) {
    // Handle any errors that occur during the request
    res.status(500).send("Error occurred while processing the request");
  }
});

module.exports = router;
