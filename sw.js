// The site used to be a PWA on this domain. Returning visitors still have its
// service worker, which would keep serving the cached site and never show the
// redirect. The browser fetches this file when it checks for an update; this
// replacement clears the caches, unregisters itself and reloads open tabs, so
// they hit the redirect page instead.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
    await self.registration.unregister();
    const windows = await self.clients.matchAll({ type: "window" });
    windows.forEach((client) => client.navigate(client.url));
  })());
});
