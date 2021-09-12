const Url = require("../models/short-url");
const urlChecker = require("url").URL;

//URl Validation
const isUrlValid = (url) => {
  try {
    new urlChecker(url);
    return true;
  } catch (err) {
    return false;
  }
};
//Generate random 4 digit number for the shorturl
const randomNumber = () => {
  const number = Math.floor(Math.random() * 8999) + 1000;
  return number;
};

const shortenUrl = async (req, res) => {
  const { url } = req.body;
  //check if url is valid
  const validUrl = isUrlValid(url);

  if (!validUrl) {
    return res.status(500).json({ error: "invalid url" });
  } else {
    try {
      const findUrl = await Url.findOne({ original_url: url });
      if (findUrl) {
        return res.status(201).json({ findUrl });
      } else {
        const newUrl = randomNumber().toString();
        const newEntry = await Url.create({
          original_url: url,
          short_url: newUrl,
        });
        return res.status(201).json({ newEntry });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ msg: "something went wrong, please try again" });
    }
  }
};
const retrieveUrl = async (req, res) => {
  const { shortUrl } = req.params;
  // check if it exists on the database
  try {
    const findUrl = await Url.findOne({ short_url: shortUrl });
    if (!findUrl) {
      return res.status(404).json({ success: true, data: {} });
    } else {
      const { original_url } = findUrl;
      return res.status(302).redirect(original_url);
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "something went wrong, please try again" });
  }
};
module.exports = { shortenUrl, retrieveUrl };
