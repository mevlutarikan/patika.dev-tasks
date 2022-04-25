/**
Ödev 5
Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
*/

const http = require('http');
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
    case '/index':
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<h2>Index Sayfasına Hoşgeldiniz</h2>');
      break;

    case '/hakkimda':
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<h2>Hakkimda Sayfasına Hoşgeldiniz</h2>');
      break;

    case '/iletisim':
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<h2>İletisim Sayfasına Hoşgeldiniz</h2>');
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<h2>Böyle bir Sayfa Yok</h2>');
      break;
  }
  res.end();
});

server.listen(port, () => console.log(`HTTP server is started on port ${port}`));
