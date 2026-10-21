# GSM Landing Page

Website katalog publik **PT Global Sinergi Medica** (Next.js).

Repo ini hanya berisi landing page. ERP ada di repo terpisah: [`gsm-erp`](https://github.com/global-sinergi-medica/gsm-erp).

## Stack

- Next.js 16
- React 19
- Tailwind CSS v4
- TypeScript

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Salin `.env.example` ke `.env.local` bila perlu mengubah URL tombol Login ERP.

## Deploy & domain

Ikuti panduan lengkap: **[GUIDE.md](./GUIDE.md)** (Vercel + custom domain, langkah demi langkah).

## Script

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Server development |
| `npm run build` | Build produksi |
| `npm run start` | Jalankan hasil build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
