importScripts('./ngsw-worker.js');
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    var action = event.action;
    var notification = event.notification;
    switch (action) {
        case 'explore-application':
            event.waitUntil(clients.openWindow(notification.data.applicationUrl));
            break;
        case 'explore-github':
            event.waitUntil(clients.openWindow(notification.data.githubUrl));
            break;
    }
});
