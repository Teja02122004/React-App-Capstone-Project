self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('little-lemon-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
        'home.html',
        'profile.html',
        'style.css',
        'images/logo.png',
        'images/hero-image.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});