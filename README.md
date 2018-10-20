# Adonis fullstack application

This is the fullstack type script boilerplate for AdonisJs, it comes pre-configured with.

1.  Bodyparser
2.  Session
3.  Authentication
4.  Web security middleware
5.  CORS
6.  Edge template engine
7.  Lucid ORM
8.  Migrations and seeds
9.  tslint
10. Typescript
11. Docker

Manually clone the repo and then run `npm install`.

You may need to globally install type script and tslint to get VSCode to use lint

sudo npm install -g typescript
sudo npm install -g tslint


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Docker

Build with: npm run-script docker-build
Run with: npm run-script docker-run