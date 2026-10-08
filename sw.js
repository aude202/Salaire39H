const CACHE='salaire39h-home-v2';
const FILES=['./','./index.html','./manifest.webmanifest','./app/','./app/index.html','./app/manifest.webmanifest','./app/sw.js','./app/icons/icon-192.png','./app/icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
