const express = require("express");
const router = express.Router();
const { shortenUrl, retrieveUrl } = require("../controllers/url-shortener");

router.route("/").post(shortenUrl);
router.route("/:shortUrl").get(retrieveUrl);

module.exports = router;
