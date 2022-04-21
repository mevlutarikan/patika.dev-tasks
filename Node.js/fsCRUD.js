/**
Ödev 4
FS File System Modülü
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.
*/
const fs = require('fs');
let data = '{"name": "Employee 1 Name", "salary": 2000}';

//create
fs.writeFile('employees.json', data, 'utf-8', (err) => {
  if (err) console.log('error: ', err);
  console.log('JSON file is created');
});

//append
fs.appendFile('employees.json', '\n{"name": "Mevlut Arikan", "salary": 1000}', (err) => {
  if (err) console.log('error: ', err);
  console.log('New data is added to file');
});

//read
fs.readFile('employees.json', 'utf-8', (err, data) => {
  if (err) console.log('error: ', err);
  console.log('File content:\n' + data);

  //delete
  fs.unlink('employees.json', (err) => {
    if (err) console.log('error: ', err);
    console.log('File deleted');
  });
});
