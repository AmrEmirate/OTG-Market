# Antigravity Agent Guidelines & Workflow Rules — OTG Market

Instruksi dan aturan kerja otomatis untuk AI Agent dalam pengembangan proyek **OTG Market**.

---

## 1. Aturan Wajib Pasca-Pengerjaan (Post-Task Validation)

Setiap kali agent selesai melakukan modifikasi kode atau menambah fitur, agent **WAJIB** menjalankan validasi:
```bash
npx eslint . # atau linter/syntax check yang relevan
```
*Dilarang menjalankan `npm run build` atau `vite build` secara lokal agar tidak menghasilkan folder `dist/` lokal.*

---

## 2. Larangan Folder dist
* Dilarang membuat atau meng-commit folder `dist/`.
* Folder `dist/` wajib berada dalam `.gitignore`.
* Kompilasi build produksi dilakukan otomatis di server/CI/CD.

---

## 3. Otomatisasi Git Commit & Push ke GitHub

Setelah kode bebas dari error:
```bash
git add .
git commit -m "feat/fix: <deskripsi perubahan>"
git push origin main
```
