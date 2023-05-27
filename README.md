# user auth using jwt

A conceptual repository demonstrating the application of jwt tokens for restricted access to users. Works by adding an authentication middleware before accessing content. 


# note
add ACCESS TOKEN and REFRESH ACCESS TOKEN in .env
can use crypt library to create initial tokens



## To run locally
`npm start` runs the server which serves the posts matched to username

`npm run dev` runs the authentication server which handles jwt tokens. 

`/login` creates an expirable(20s) access token which can be used as Authorization token on the posts server. It also creates a refresh token which you can use to create another access token when the old one expries

`/token` creates a new access token which can be accessed by providing the refresh token as body. 

```bash
"token":"REFRESH_TOKEN"
```

`/logout` empties the refresh token list, and hence, disables the ability to create new access tokens and access the posts.