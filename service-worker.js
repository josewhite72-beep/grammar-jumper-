/* Service Worker for English Adventure PK-6
 * Cache-first strategy for the static shell so the app works offline
 * after the first successful visit. Perfect for school computer labs
 * where the internet may be unreliable.
 */
const CACHE_NAME = "english-adventure-v2";
const SHELL_FILES = [
  "./",
  "./index.html",
  "./game.html",
  "./teacher.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  // External question banks (80 questions per grade)
  "./questions/grade_prek.js",
  "./questions/grade_k.js",
  "./questions/grade_1st.js",
  "./questions/grade_2nd.js",
  "./questions/grade_3rd.js",
  "./questions/grade_4th.js",
  "./questions/grade_5th.js",
  "./questions/grade_6th.js",
  // Google Fonts used by the game/landing
  "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Baloo+2:wght@500;700;800&display=swap"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // addAll is all-or-nothing — use individual puts to tolerate 3rd-party failures.
      return Promise.all(
        SHELL_FILES.map((url) =>
          cache
            .add(new Request(url, { cache: "reload" }))
            .catch((e) => console.warn("SW precache skipped:", url, e))
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Network-first for navigation requests (HTML) so updates flow quickly when online
  const isHTMLNav =
    req.mode === "navigate" ||
    (req.headers.get("accept") || "").includes("text/html");

  if (isHTMLNav) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then(
            (cached) =>
              cached ||
              caches.match("./game.html") ||
              caches.match("./index.html")
          )
        )
    );
    return;
  }

  // Cache-first for everything else (assets, fonts)
  event.respondWith(
    caches.match(req).then(
      (cached) =>
        cached ||
        fetch(req)
          .then((res) => {
            // Only cache successful, basic/opaque responses
            if (
              res &&
              (res.status === 200 || res.type === "opaque") &&
              (url.origin === self.location.origin ||
                url.hostname.endsWith("fonts.googleapis.com") ||
                url.hostname.endsWith("fonts.gstatic.com"))
            ) {
              const copy = res.clone();
              caches.open(CACHE_NAME).then((c) => c.put(req, copy));
            }
            return res;
          })
          .catch(() => cached)
    )
  );
});
