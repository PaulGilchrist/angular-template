var express = require('express');
var webpush = require('web-push');

var vapidKeys = {
    "publicKey":"BE6IqM0la0Mr7jg5w5vYwPk5gwbypKcpsJrqH-xX3nfLm9BCCrt2EDCyMZH7yZYFDGtGxtCgZqCgnGeuJehndoc",
    "privateKey":"bW1GCNS8dMosgZr3bO155BRuATT8GVbJhPKPy9ZPmoY"
};

webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

var app = express();

app.route('/api/notifications').post(sendNotification);

function sendNotification(req, res) {
    var allSubscriptions = [
        {"endpoint":"https://fcm.googleapis.com/fcm/send/fIg349CZ4Jg:APA91bHjG2UHvgDgS7PBz_gwGpY0M49rcvDOaHx3URki80j3QeUfy8SyuvfNCPaor5dne7DfjnhVq3vVw2ovXNsG0OLBtL0pR8hCfcQlsQY0Su45qncMZij1BP7Wy64C4RgRXi4a0FOO","expirationTime":null,"keys":{"p256dh":"BGQ03cZz9Apc1wZT_p6ZoPdkd6JUP07XdB0JeMuZjmYwUIx0IqdU1yimyCzgGHM85-X6X3S728XtJZXv_vxumcA","auth":"PBQmWyz0rov4QqurjQE7RQ"}}
    ];
    console.log('Total subscriptions', allSubscriptions.length);
    var notificationPayload = {
        "notification": {
            "title": "Angular Template Notification",
            "body": "Welcome to the Angular Training Templete!",
            "icon": "assets/icons/icon-72x72.png",
            "vibrate": [100, 50, 100],
            "data": {
                "dateOfArrival": Date.now(),
                "primaryKey": 1
            },
            "actions": [{
                "action": "explore",
                "title": "Go to the site"
            }]
        }
    };
    Promise.all(allSubscriptions.map(function(sub) {
            webpush.sendNotification(sub, JSON.stringify(notificationPayload));
        }))
        .then(function() { return res.status(200).json({message: 'Newsletter sent successfully.'});})
        .catch(function(err) {
            console.error("Error sending notification, reason: ", err);
            res.sendStatus(500);
        });
}

//Use port provided by hosting provider if available
app.set('port', (process.env.PORT || 3000));
//Start the application
app.listen(app.get('port'), function() {
    console.log('App running on port', app.get('port'));
});
