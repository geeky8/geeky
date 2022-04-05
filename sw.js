if('serviceworker' in navigator){
    window.addEventListener('load', function(){
        navigator.serviceWorker.register('/sw.js').then(function (registration){
            console.log('serviceWorker registration succesful with scope', registration.scope);
        }, function (err) {
            console.log("ServiceWorker registration failed",err);
        });
    })
}

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
'/',
'index.html',
/* '/styles/main.css',
'/script/main.js' */
];
self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });