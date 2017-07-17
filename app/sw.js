self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/main.bundle.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  const { request } = event;
  event.respondWith(
    caches.match(request).then(function(response) {
        if (response) {
            return response;
        }
      return fetch(request);
    })
  );
});