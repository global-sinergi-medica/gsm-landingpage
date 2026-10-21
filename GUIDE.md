# Panduan Deploy Landing Page GSM ke Vercel + Domain

Panduan ini untuk orang yang belum sering pakai Vercel. Ikuti urutan nomor. Centang tiap langkah setelah selesai.

**Hasil akhir yang diinginkan**

- Kode di GitHub: `global-sinergi-medica/gsm-landingpage`
- Website live di Vercel (contoh: `gsm-landingpage.vercel.app`)
- Domain kustom terhubung (contoh: `globalsinergimedica.com` atau `www.globalsinergimedica.com`)

---

## 0. Yang perlu disiapkan dulu

1. Akun GitHub yang punya akses ke organisasi `global-sinergi-medica`.
2. Akun [Vercel](https://vercel.com) — login **dengan GitHub** yang sama (paling mudah).
3. Domain yang sudah dibeli (di Niagahoster, Cloudflare, Google Domains, dll.).
4. Akses ke panel DNS domain itu (tempat menambah record `A` / `CNAME`).

Tidak perlu server sendiri. Vercel yang menjalankan Next.js.

---

## 1. Pastikan kode sudah di GitHub

Repo ini sudah di-push ke:

`https://github.com/global-sinergi-medica/gsm-landingpage`

Cek di browser: branch `main` harus berisi folder `src/`, `public/`, `package.json`.

Kalau belum punya kode di laptop:

```bash
git clone https://github.com/global-sinergi-medica/gsm-landingpage.git
cd gsm-landingpage
npm install
npm run build
```

Kalau `npm run build` hijau, kode siap di-deploy.

---

## 2. Hubungkan repo ke Vercel (deploy pertama)

### 2.1 Buat / buka project

1. Buka [https://vercel.com/new](https://vercel.com/new).
2. Login dengan GitHub.
3. Klik **Add New… → Project**.
4. Di daftar repo, pilih **`gsm-landingpage`**.
   - Jika tidak muncul: klik **Adjust GitHub App Permissions** / **Configure GitHub App**, centang organisasi `global-sinergi-medica` dan repo ini, simpan, lalu refresh.

### 2.2 Pengaturan import (penting)

Di layar **Configure Project**:

| Field | Isi |
| --- | --- |
| Project Name | `gsm-landingpage` (atau nama pendek lain) |
| Framework Preset | **Next.js** (otomatis terdeteksi) |
| Root Directory | biarkan kosong / `.` (bukan `erp`) |
| Build Command | default (`next build`) |
| Output Directory | default (kosongkan) |
| Install Command | default (`npm install`) |

**Environment Variables** (opsional, bisa ditambah nanti):

| Name | Value contoh |
| --- | --- |
| `NEXT_PUBLIC_ERP_LOGIN_URL` | `https://erp.globalsinergimedica.com/login` |

Klik **Deploy**.

### 2.3 Tunggu deploy selesai

1. Vercel membangun project (1–3 menit).
2. Status harus **Ready** (hijau).
3. Klik URL preview, contoh: `https://gsm-landingpage.vercel.app`.
4. Pastikan homepage dan `/catalog` terbuka.

Setiap push ke branch `main` akan otomatis deploy ulang.

---

## 3. Sambungkan domain kustom

Ada dua jalur umum. Pilih yang cocok.

### Opsi A — Domain root (`globalsinergimedica.com`)

1. Di Vercel: buka project → tab **Settings → Domains**.
2. Ketik domain, contoh: `globalsinergimedica.com` → **Add**.
3. Vercel menampilkan record DNS yang harus kamu buat. Biasanya:

   | Type | Name | Value |
   | --- | --- | --- |
   | `A` | `@` | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   *(Angka/IP dan target CNAME bisa berbeda — **ikut yang tertulis di dashboard Vercel**, jangan hafalan di tabel ini.)*

4. Buka panel DNS penyedia domain.
5. Hapus record lama yang bentrok untuk `@` / `www` (A/AAAA/CNAME lama).
6. Tambah record sesuai yang Vercel minta.
7. Simpan. Tunggu DNS (bisa 5 menit sampai beberapa jam; kadang sampai 24–48 jam).
8. Kembali ke Vercel → Domains. Status harus jadi **Valid** / centang hijau.
9. SSL (HTTPS) dibuat otomatis oleh Vercel. Tidak perlu upload sertifikat manual.

### Opsi B — Subdomain saja (`www.` atau `landing.`)

1. Di Vercel Domains, tambah misalnya `www.globalsinergimedica.com`.
2. Di DNS, buat:

   | Type | Name | Value |
   | --- | --- | --- |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   (lagi: **ikut teks di Vercel**.)

3. Tunggu valid + HTTPS.

### Redirect `www` ↔ root (disarankan)

Di Vercel Domains, set salah satu sebagai **Primary**, lalu aktifkan redirect domain lain ke primary (misalnya semua `www` ke root, atau sebaliknya). Satu alamat utama = SEO lebih rapi.

---

## 4. Cek setelah domain hidup

Buka di browser (mode incognito):

- [ ] `https://domain-kamu.com` → homepage
- [ ] `https://domain-kamu.com/catalog` → katalog
- [ ] Gembok HTTPS muncul (aman)
- [ ] Tombol **Login** mengarah ke URL ERP yang benar

Kalau Login salah: Vercel → Settings → Environment Variables → edit `NEXT_PUBLIC_ERP_LOGIN_URL` → **Redeploy** (Deployments → … → Redeploy).

---

## 5. Alur kerja harian (update website)

```bash
# di laptop
git pull
# edit kode…
npm run build   # cek lokal dulu
git add .
git commit -m "Update catalog copy"
git push origin main
```

Vercel otomatis deploy dari `main`. Lihat progress di tab **Deployments**.

---

## 6. Troubleshooting cepat

| Masalah | Coba ini |
| --- | --- |
| Repo tidak muncul di Vercel | GitHub App permissions → izinkan org + repo |
| Build gagal di Vercel | Buka log Deployments; jalankan `npm run build` lokal dulu |
| Domain “Invalid Configuration” | Bandingkan DNS dengan yang Vercel tampilkan; hapus record bentrok; tunggu propagasi |
| HTTPS belum aktif | Biasanya menunggu DNS Valid dulu; jangan paksa SSL di hosting lama |
| Halaman lama masih muncul | Hard refresh / incognito; tunggu deploy Ready |
| Login button salah | Set ulang `NEXT_PUBLIC_ERP_LOGIN_URL` lalu Redeploy |

---

## 7. Catatan penting

1. Repo ini **hanya landing**. Jangan taruh folder `erp/` di sini.
2. Deploy production dari branch **`main`**.
3. File rahasia (`.env*`) tidak di-commit. Pakai Environment Variables di Vercel.
4. Domain lama di hosting lain: setelah pindah DNS ke Vercel, matikan / jangan biarkan dua A record bentrok.

---

## 8. Ringkas (cheat sheet)

1. Push kode ke GitHub `gsm-landingpage` (`main`).
2. Vercel → Import project → Framework Next.js → Deploy.
3. Settings → Domains → Add domain.
4. Copy record DNS dari Vercel → tempel di panel DNS domain.
5. Tunggu status Valid + HTTPS.
6. Uji homepage, `/catalog`, tombol Login.

Selesai.
