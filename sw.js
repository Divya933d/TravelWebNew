const CACHE_NAME = 'travel-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/main.js',
    '/aboutus.html',
    '/japan.html',
    '/London.html',
    '/Norway.html',
    '/explore.html',
    '/assets/about.webp',
    '/assets/discover-1.webp',
    '/assets/discover-2.webp',
    '/assets/discover-3.webp',
    '/assets/author-1.webp',
    '/assets/author-2.webp',
    '/assets/author-3.webp',
    '/assets/author-4.webp',
    '/assets/author-5.webp',
    '/assets/author-6.webp',
    '/assets/bali.webp',
    '/assets/banner.webp',
    '/assets/blog-1.webp',
    '/assets/blog-2.webp',
    '/assets/blog-3.webp',
    '/assets/blog-4.webp',
    'assets/gallery-1.webp',
    '/assets/gallery-2.webp',
    '/assets/gallery-3.webp',
    '/assets/gallery-4.webp',
    '/assets/gallery-5.webp',
    '/assets/header.webp',
    '/assets/japan.webp',
    '/assets/journals-1.webp',
    '/assets/journals-2.webp',
    '/assets/journals-3.webp',
    '/assets/journals-4.webp',
    '/assets/journals-5.webp',
    '/assets/journals-6.webp',
    '/assets/kyoto.webp',
    '/assets/London.webp',
    '/assets/norway.webp',
    '/assets/nyc.webp',
    '/assets/paris.webp',


    // Add other assets you want to cache
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate event
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (!cacheWhitelist.includes(cacheName)) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
