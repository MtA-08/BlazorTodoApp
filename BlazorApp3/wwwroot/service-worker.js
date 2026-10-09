// wwwroot/service-worker.js

self.addEventListener('install', event => {
    console.log('Service worker installing...');
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
    return self.clients.claim();
});

// A fetch listener is required by some mobile browsers (like Chrome) 
// to recognize the app as a valid PWA, even if it does nothing.
self.addEventListener('fetch', event => {
    return;
});