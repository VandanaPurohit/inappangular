self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());

  event.waitUntil(self.registration.unregister().then(() => {
    console.log('NGSW Safety Worker - unregistered old service worker');
  }));

  event.waitUntil(caches.keys().then(cacheNames => {
    const ngswCacheNames = cacheNames.filter(name => /^ngsw:/.test(name));
    return Promise.all(ngswCacheNames.map(name => caches.delete(name)));
  }));
});
console.log('Resitring push notification');
self.addEventListener('push', function(event) {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
   console.log('retrun');
    return;
  }

  var data = {};
  if (event.data) {
    data = event.data.json();
  }
  console.log(data);
  var title = data.title || "Something Has Happened";
  var message = data.message || "Here's something you might want to check out.";
  var icon = "images/new-notification.png";

  var notification = new Notification(title, {
    body: message,
    tag: 'simple-push-demo-notification',
    icon: icon
  });
console.log('Inside notification'+notification);
  notification.addEventListener('click', function() {
    if (clients.openWindow) {
      clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
    }
  });
});