# URL Shortener

[femto-url-shortener](https://femto-url-shortener.glitch.me/) is a full stack app that shortens urls. This project idea was gotten from [freeCodeCamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice).

---

### Resources

There is 2 resources

- Shorten URL <https://femto-url-shortener.glitch.me/>
- Retrieve URL <https://femto-url-shortener.glitch.me/>

### Shorten URL

A post request is made to <https://femto-url-shortener.glitch.me/api> with the request body containing the url to be shortened. The URL must be in the format https://www.example.com/ or https://example.com/ else a 400 error is returned. When a get request is made to <https://femto-url-shortener.glitch.me/api/:shortUrl> where :shortUrl is the shortened URL, it is redirected to the webpage ofURL associated to the shortened url

##### Sample Return

```js
{
  newEntry: {
    original_url: "https://www.example.com/";
    short_url: "5484";
    _id: "617dcc8dc87c820a261eeecd";
    __v: 0;
  }
}

// A post request to <#/5484> redirects to www.example.com
```

### Feedback!!

I'd love your feedback on the API. You can reach me via [email](mailto:chinaemerema@gmail.com) or give me a shout out on [twitter](https://twitter.com/femto_ace?t=nk6ylNm1Zp2l0yiJkCKFeA&s=09)
