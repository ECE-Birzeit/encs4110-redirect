// The site used to be a PWA on this domain. An app installed from here always opens
// this domain, so it can't use the new site's offline copy. This worker:
//  - clears the old site's caches for returning visitors (the browser fetches this
//    file when it checks for an update) and reloads their open tabs, so a browser tab
//    reaches the redirect and an installed app reaches the "reinstall" notice;
//  - keeps the notice page saved, so opening the old app offline shows it instead of
//    the browser's no-connection error.
// index.html registers it only inside an installed app. Change CACHE when index.html changes.
const CACHE = "moved-notice-v1";

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.add(new Request("/", { cache: "reload" }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const stale = (await caches.keys()).filter((key) => key !== CACHE);
    await Promise.all(stale.map((key) => caches.delete(key)));
    await self.clients.claim();
    // Only tabs still showing the old cached site need a reload.
    if (stale.some((key) => key.startsWith("workbox-"))) {
      const windows = await self.clients.matchAll({ type: "window" });
      windows.forEach((client) => client.navigate(client.url));
    }
  })());
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode !== "navigate") return;
  event.respondWith(
    fetch(event.request).catch(async () => (await caches.match("/", { cacheName: CACHE })) || Response.error())
  );
});
