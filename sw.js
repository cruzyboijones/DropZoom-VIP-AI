self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('dz-cache').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/ai-helper.html',
      '/explore.html',
      '/style.css'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

