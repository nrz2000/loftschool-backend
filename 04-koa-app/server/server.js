const Koa = require('koa');
const path = require('path');
const Pug = require('koa-pug');
const serve = require('koa-static');
const koaBody = require('koa-body');
const flash = require('koa-better-flash');
const session = require('koa-generic-session');
const router = require('./routes');
const app = new Koa();
const pug = new Pug({
  viewPath: path.resolve(__dirname, '../source/template/pages'),
  pretty: false,
  noCache: true,
  app: app
});

app.use(serve(path.join(__dirname, '../public')));
app.use(koaBody());
app.keys = ['keys'];
app.use(session());
app.use(flash());
app.use(router.routes());

app.listen(3001);
