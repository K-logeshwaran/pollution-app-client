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
const urlB64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
    const rawData = atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }
  
  // saveSubscription saves the subscription to the backend
  const saveSubscription = async (subscription) => {
    const SERVER_URL = 'http://localhost:4000/save-subscription'
    const response = await fetch(SERVER_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    })
    return response.json()
  }
  
  self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    try {
      const applicationServerKey = urlB64ToUint8Array(
        'BJ5IxJBWdeqFDJTvrZ4wNRu7UY2XigDXjgiUBYEYVXDudxhEs0ReOJRBcBHsPYgZ5dyV8VjyqzbQKS8V7bUAglk'
      )
      const options = { applicationServerKey, userVisibleOnly: true }
      const subscription = await self.registration.pushManager.subscribe(options)
      console.log(subscription);
      //const response = await saveSubscription(subscription)
      console.log(response)
    } catch (err) {
      console.log('Error', err)
    }
  })