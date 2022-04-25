/* 
Ödev 6
Koa.js ile web sunucumuzu yazalım.

koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
*/

const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

router.get('/', (ctx) => {
  ctx.body = '<h1>Index Sayfasi</h1>';
});

router.get('/hakkimda', (ctx) => {
  ctx.body = '<h1>Hakkimda Sayfasi</h1>';
});

router.get('/iletisim', (ctx) => {
  ctx.body = '<h1>Iletisim Sayfasi</h1>';
});

app.use(router.routes());

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});

//ödev oluşturuldu
