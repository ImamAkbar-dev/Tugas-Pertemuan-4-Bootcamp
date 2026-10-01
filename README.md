# Tugas Pertemuan 4 - Bootcamp (React + Vite)

Proyek ini adalah aplikasi web berbasis React yang dibangun menggunakan bundler **Vite** untuk memenuhi tugas pertemuan 4 bootcamp. Proyek ini menampilkan profil interaktif dengan fitur *Dark/Light Mode* dan tombol *Like*.

---

## 📋 Prasyarat (Prerequisites)

Sebelum menjalankan proyek ini, pastikan komputer Anda telah terinstal:
* **Node.js** (Disarankan versi LTS terbaru, minimal versi 16.x atau lebih baru). Node.js sudah termasuk `npm` secara otomatis.
* **Git** (Opsional, untuk melakukan *cloning* repositori).

Untuk memeriksa apakah Node.js dan npm sudah terinstal di komputer Anda, buka terminal (CMD, PowerShell, atau Terminal Mac/Linux) lalu ketik:
```bash
node -v
npm -v
```
Jika muncul versi angka (misal `v18.x.x` dan `9.x.x`), berarti Node.js dan npm sudah siap digunakan.

---

## ⚙️ Cara Instalasi & Menjalankan Proyek

Ikuti langkah-langkah di bawah ini untuk mengunduh, menginstal, dan menjalankan proyek di komputer lokal Anda:

### 1. Clone Repositori (Atau Buka Folder Proyek)
Jika Anda mengunduh dari GitHub, buka terminal pada direktori proyek Anda atau *clone* repositori:
```bash
git clone https://github.com/ImamAkbar-dev/Tugas-Pertemuan-4-Bootcamp.git
cd tugas-pertemuan4-isb
```

### 2. Install Dependensi (`npm install`)
Langkah ini berfungsi untuk mengunduh semua pustaka/modul yang dibutuhkan oleh proyek (tertera di dalam file `package.json`), seperti React, ReactDOM, dan plugin Vite. 

Jalankan perintah berikut di terminal:
```bash
npm install
```
*Tunggu hingga proses pengunduhan selesai dan folder `node_modules` berhasil dibuat.*

### 3. Menjalankan Server Pengembangan (`npm run dev`)
Setelah proses instalasi dependensi selesai, Anda dapat menjalankan aplikasi dalam mode *development* lokal.

Jalankan perintah berikut:
```bash
npm run dev
```

Anda akan melihat output di terminal yang mirip seperti ini:
```text
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 4. Membuka Aplikasi di Browser
Buka browser web favorit Anda (Google Chrome, Microsoft Edge, Firefox, dll.), lalu salin dan tempel tautan berikut ke bilah alamat:
```text
http://localhost:5173/
```
Aplikasi React Anda kini sudah berjalan dan siap digunakan!

---

## 🛑 Cara Menghentikan Server
Jika Anda ingin menghentikan server pengembangan yang sedang berjalan di terminal, cukup tekan tombol:
* `Ctrl + C` pada keyboard Anda (Windows/Linux)
* `Cmd + C` (Mac)
Lalu ketik `Y` jika diminta konfirmasi.
