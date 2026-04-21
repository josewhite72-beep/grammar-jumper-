# 🌈 English Adventure PK-6

> **A pastel HTML5 platformer that teaches English to kids Pre-K → 6th grade.**
> Single-file, offline-ready PWA. Perfect for school computer labs.
>
> _Un juego HTML5 de plataformas en tonos pastel para enseñar inglés a niños de Pre-K al 6.º grado. Una sola carpeta, funciona offline y se instala como app. Ideal para el laboratorio de informática de la escuela._

---

## 🇬🇧 English

### ✨ Features
- **8 grades** — Pre-K, Kindergarten, 1st → 6th Grade.
- **128 CEFR-aligned questions** (Pre A1.1 → A2.1), with Panamanian cultural content (Panama Canal, Sancocho, Pollera, Mola…).
- **3 avatars** — Boy, Girl or Cat — with running, jumping and blinking animations drawn on Canvas.
- **Text-to-Speech** — Every question can be read aloud in English (Web Speech API).
- **Touch + keyboard controls** — Big pastel buttons for tablets; arrow keys/WASD for laptops.
- **Multiplayer profiles** — Each child types their name on the computer they use. Progress (stars, coins, accuracy) is saved locally.
- **Teacher panel** — See student progress on the same computer. Export to JSON or CSV for your records.
- **PWA / Offline** — After the first visit, it works without internet.

### 🚀 Quick Start

**Option A — Play online (GitHub Pages)**

1. Go to `https://<your-username>.github.io/<repo-name>/`
2. Click **Play the Game** or open `./game.html` directly.
3. Enter a name, pick an avatar, choose a grade — jump on the correct answer!

**Option B — Run locally**

Just open `index.html` (or `game.html`) in any modern browser. No build, no server, no dependencies.

> ⚠️ For the **service worker / offline mode** to work you need to serve the folder over HTTP (not `file://`). The easiest way:
> ```bash
> cd <project-folder>
> python3 -m http.server 8080
> # then open http://localhost:8080
> ```

### 📦 Deploy to GitHub Pages in 5 minutes

1. Create a new repo on GitHub (e.g. `english-adventure`).
2. Copy **the contents of this folder** into the repo root and push:
   ```bash
   git init
   git add .
   git commit -m "Initial release"
   git branch -M main
   git remote add origin https://github.com/<YOU>/english-adventure.git
   git push -u origin main
   ```
3. In your repo on GitHub → **Settings → Pages** → under *Source*, select `main` / `root`.
4. Wait 1–2 minutes. Your app is live at `https://<YOU>.github.io/english-adventure/`.

### 💻 Use in a computer lab

- Open `game.html` on every student PC.
- Each student types their name on arrival — the browser remembers them.
- On teacher time, open `teacher.html` on any of those PCs to see that PC's students progress.
- Use **Export JSON / CSV** to back up the data.

### 🗂️ File structure

```
/
├── index.html          ← Landing page (Play / Teacher buttons)
├── game.html           ← The game (standalone, 150 KB, full curriculum embedded)
├── teacher.html        ← Teacher progress panel
├── manifest.json       ← PWA manifest (installable on tablets)
├── service-worker.js   ← Offline cache
├── .nojekyll           ← Disables Jekyll on GitHub Pages
├── icons/              ← PWA icons (192 / 512 / maskable / apple-touch)
└── README.md
```

### 🎨 Tech stack
- **HTML5 Canvas** for rendering
- **Vanilla JavaScript** — no frameworks, no build step
- **CSS3** with pastel design tokens
- **Web Speech API** for Text-to-Speech
- **Web Audio API** for sound effects
- **localStorage** for student profiles

### 📄 License
MIT — use it, remix it, teach with it. If it helps your classroom, let us know!

---

## 🇪🇸 Español

### ✨ Qué incluye
- **8 grados** — Pre-K, Kinder, 1.º → 6.º grado.
- **128 preguntas alineadas al MCER** (Pre A1.1 → A2.1), con contenido cultural panameño (Canal, Sancocho, Pollera, Mola…).
- **3 avatares** — Niño, Niña o Gatito — con animaciones al correr, saltar y parpadear.
- **Lectura por voz** — las preguntas se leen en inglés (Web Speech API).
- **Controles táctiles + teclado** — Botones grandes pasteles para tabletas; flechas/WASD para laptops.
- **Perfiles de jugador** — Cada niño escribe su nombre en la computadora que usa. El progreso (estrellas, monedas, precisión) se guarda local.
- **Panel del maestro** — Mirá el progreso de los estudiantes en esa misma PC. Exportá a JSON o CSV.
- **PWA / Offline** — Después de la primera visita funciona sin internet.

### 🚀 Inicio rápido

**Opción A — Jugar online (GitHub Pages)**

1. Entrá a `https://<tu-usuario>.github.io/<nombre-repo>/`
2. Hacé clic en **Play the Game** o abrí `./game.html`.
3. Escribí un nombre, elegí avatar, elegí grado — ¡saltá sobre la respuesta correcta!

**Opción B — Usar localmente**

Simplemente abrí `index.html` (o `game.html`) en cualquier navegador moderno. Sin compilación, sin servidor, sin dependencias.

> ⚠️ Para que el **service worker / modo offline** funcione, hay que servir la carpeta por HTTP (no con `file://`). La forma más fácil:
> ```bash
> cd <carpeta-proyecto>
> python3 -m http.server 8080
> # después abrí http://localhost:8080
> ```

### 📦 Deploy en GitHub Pages en 5 minutos

1. Creá un repo nuevo (por ejemplo `english-adventure`).
2. Copiá **el contenido de esta carpeta** a la raíz del repo y subí:
   ```bash
   git init
   git add .
   git commit -m "Versión inicial"
   git branch -M main
   git remote add origin https://github.com/<VOS>/english-adventure.git
   git push -u origin main
   ```
3. En tu repo en GitHub → **Settings → Pages** → bajo *Source*, seleccioná `main` / `root`.
4. Esperá 1–2 minutos. Tu app estará en vivo en `https://<VOS>.github.io/english-adventure/`.

### 💻 Uso en el laboratorio de informática

- Abrí `game.html` en cada PC de estudiantes.
- Cada niño escribe su nombre al llegar — el navegador lo recuerda.
- Cuando necesites revisar, abrí `teacher.html` en esa misma PC para ver el progreso de los estudiantes que pasaron por ahí.
- Usá **Export JSON / CSV** para respaldar los datos.

### 📱 ¿Tabletas? Instalala como app

En Chrome o Edge, al abrir la URL, aparecerá un ícono de "Instalar" en la barra de direcciones.
En iPad, usá el botón **Compartir → Añadir a pantalla de inicio**.
El juego se abre en pantalla completa, sin barras del navegador, como una app nativa.

### 📄 Licencia
MIT — usala, modificala, enseñá con ella. Si te sirve en tu aula, ¡avísanos!

---

Made with ❤️ for PK-6 English learners.
