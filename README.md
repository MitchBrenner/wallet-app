# Wallet App 💵

- node backend with express
- using nodemon so you don't have to kill server, create script under package.json

  - nodemon watches for changes

- use dotenv package to access file check [server.js](./backend/server.js)

- using neon and postgres for db
- not using an ORM using raw sql

- clerk for auth
- using built in middlware with express

```js
// built in middleware
app.use(express.json());

app.use((req, res, next) => {
  // do something like auth
  next(); // this calls the function of the endpoint
});
```
