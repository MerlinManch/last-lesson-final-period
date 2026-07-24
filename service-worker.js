const CACHE = 'last-lesson-v1';
const FILES = ['./','./index.html','./styles.css','./js/data.js','./js/logic.js','./js/save.js','./js/audio.js','./js/services.js','./js/game.js','./assets/app-icon-192.png','./assets/app-icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html')))));
