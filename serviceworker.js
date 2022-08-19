const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html' ];

const self = this;



// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//       fetch(event.request)
//       .then(res=>res)
//       .catch(err=>caches.match("offline.html"))
//     )
// });

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});

// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
console.log("Service Worker Loaded...");
self.addEventListener('push', event => {
  const data = event.data.json()
  console.log('New notification', data)
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body:data.description,
      icon:data.icon
    })
  );
})