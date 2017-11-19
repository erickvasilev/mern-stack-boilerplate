# MERN Stack v1.0

Ini adalah MERN stack yang sudah dikonfigurasi agar bisa:

* Menjalankan Aplikasi React di server yang sama dengan Express Server.
* Create, Read, Update dan Delete data dari database via REST API

PENTING: install terlebih dahulu MongoDB di server anda

ref: https://docs.mongodb.com/manual/installation/

## Instalasi

1. Clone repository

```bash
git clone https://github.com/erickvasilev/mern-stack-boilerplate.git
```

2. masuk ke direktori dan jalankan `npm install`

```bash
cd mern-stack-boilerplate && npm install
```

3. Konfigurasi koneksi database

Ubah  `address` dan `dbName` sesuai dengan konfigurasi mongoDB anda di: server/config.js.


## Untuk Development

Ketika development, app harus dijalankan dengan dua command dibawah ini...

```bash
node server/server.js
```
jalankan perintah diatas lalu biarkan, dengan menggunakan terminal yang lain, jalankan...

```bash
npm start
```

## Untuk Production

Untuk Production, build terlebih dahulu App nya, lalu hidupkan Express Server

### Build React App

```bash
npm run build
```

Setelah itu, hidupkan Express Server

```bash
cd server
npm start
```
Aplikasi anda akan jalan di port 3001.

### BIG Thanks

Learn from here: https://docs.microsoft.com/en-us/azure/cosmos-db/tutorial-develop-mongodb-react
