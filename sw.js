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
    caches.match(e.request).then(res => {
      return res || fetch(e.request).catch(() => {
        // Optionally, return offline.html or a fallback here
        return new Response('<h1>Offline or file not found.</h1>', { headers: { 'Content-Type': 'text/html' } });
      });
    })
  );
});
